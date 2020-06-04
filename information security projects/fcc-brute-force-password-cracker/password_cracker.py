import hashlib


def crack_sha1_hash(hash, use_salts=False):
    with open('top-10000-passwords.txt', 'r') as pass_file:
        if use_salts:
            # Load salts
            with open('known-salts.txt', 'r') as salt_file:
                salts = [salt.strip() for salt in salt_file.readlines()]
        # Check passwords one by one
        for password in pass_file.readlines():
            password = password.strip()

            if use_salts:
                # Generate list of salts appended to password, and prepended to password
                passwords = (''.join(to_join) for salt in salts for to_join in [(salt, password), (password, salt)])
            else:
                passwords = [password]
            
            for to_hash in passwords:
                hashed = hashlib.sha1(to_hash.encode()).hexdigest()
                # Return matched password
                if hashed == hash:
                    return password

    return 'PASSWORD NOT IN DATABASE'
