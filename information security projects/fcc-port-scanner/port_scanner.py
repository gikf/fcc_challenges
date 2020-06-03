import socket
from common_ports import ports_and_services

def get_open_ports(target, port_range, verbose=False):
    open_ports = []

    # Verify target
    try:
        ip_address = socket.gethostbyname(target)
    except socket.gaierror:
        # Check was it ip or hostname
        try:
            target_split = target.split('.')
            target_split = [int(part) for part in target_split]
            return 'Error: Invalid IP address'
        except ValueError:
            return 'Error: Invalid hostname'
    
    if ip_address == target:
        try:
            url, alias, ip_addresses = socket.gethostbyaddr(target)
            ip_address = ip_addresses[0]
        except socket.herror:
            url = None
    else:
        url = target

    # Open socket
    port_start, port_end = port_range
    for port in range(port_start, port_end + 1):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(2)
            if not s.connect_ex((ip_address, port)):
                open_ports.append(port)

    if verbose:
        lines = []
        if url:
            lines.append(f'Open ports for {url} ({ip_address})')
        else:
            lines.append(f'Open ports for {ip_address}')
        lines.append('PORT     SERVICE')

        for port in open_ports:
            service_name = ports_and_services.get(port, 'unknown')
            lines.append(f'{port:<9}{service_name}')
        return '\n'.join(lines)

    return open_ports
