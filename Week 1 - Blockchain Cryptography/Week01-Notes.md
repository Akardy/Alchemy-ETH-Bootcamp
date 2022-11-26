In the first week, the bootcamp covers the fundamentals of Cryptography which the name crypto is derived from, and they explain concepts such as hash functions, Public Key, and introduce us to some of the most known algorithms for public key cryptography like RSA and ECDSA. 


`NOTES`: I’ll upload my answers for all the challenges in the bootcamp, and I’ll keep updating..
You can **my find my answers for the first week challanges here**: [ANSWERS FOR WEEK 1](https://github.com/Akardy/Alchemy-ETH-Bootcamp/tree/main/Week%201%20-%20Blockchain%20Cryptography).


**Cryptographic hash function**

A `hash function` is simply an algorithm that maps data or an input of any size and turn into a fixed size output.
A hash function must be `deterministic`, meaning one specific input always maps to the same specific output, and also it should be difficult to find two different message with equal hash and such a pair is called `hash collision`.
And it must contain other specific properties such as:

-  `Pseudorandom` - It is not possible to guess the output based on the output of similar inputs.
-  `One-way` - If someone gives you a new output, you could not determine an input without guessing.
- `Fast to Compute` - It must be a quick calculation for a computer.

**Public Key Cryptography**

Historically, Cryptography was the study of encrypting messages securely so it couldn't be decrypted even if intercepted. `Diffie–Hellman key exchange` was one of the first public-key protocols.

The Diffie–Hellman key exchange method allows two parties that have no prior knowledge of each other to jointly establish a shared secret key over an insecure channel. This key can then be used to encrypt subsequent communications using a symmetric-key cipher.

Public key cryptography is considered `asymmetric encryption` in that only one party has access to the private key.
Today, both RSA and ECDSA are two popularly used algorithms for public key cryptography.

**Elliptic curve digital signature algorithm (ECDSA)**
An `elliptic curve` is the set of points that satisfy a specific mathematical equation. The equation for an elliptic curve looks something like this:
                   ```y2 = x3 + ax + b```
- There are other representations of elliptic curves, but technically an elliptic curve is the set points satisfying an equation in two variables with degree two in one of the variables and three in the other. An elliptic curve is not just a pretty picture, it also has some properties that make it a good setting for cryptography.
- The history of cryptography shows us that good cryptography has been repeatedly defeated not because of bad math, but because of bad implementations of good math.
- One interesting quirk of the ECDSA algorithm is that every signature requires some random or unpredictable data as input. If the source of randomness is predictable to an attacker, then they can figure out the private key. Hackers have exploited this vulnerability in several high-profile incidents.

**For more reading about Public Key Cryptography:**
- Check out the Wikipedia Page for [Whitfield Diffie](https://en.wikipedia.org/wiki/Whitfield_Diffie).
- Handbook of [Applied Cryptography](https://cacr.uwaterloo.ca/hac/).
- An article explaining [ECDSA](https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/) in more depth.
- An article showing how the [NSA made a deliberate flaw to crack the encryption of a random number generator called (Dual_EC_DRBG)](https://www.reuters.com/article/us-usa-security-nsa-rsa/exclusive-nsa-infiltrated-rsa-security-more-deeply-than-thought-study-idUSBREA2U0TY20140331).

**RSA**

The `RSA algorithm` is based on the idea that it's very easy to find the product of two prime numbers, yet extremely difficult to factor out those two prime numbers if you have the product.


**Secp256k1**
- `secp256k1` refers to the parameters of the `elliptic curve` used in Bitcoin's public-key cryptography, and is defined in Standards for Efficient Cryptography (SEC). Currently Bitcoin uses secp256k1 with the ECDSA algorithm, though the same curve with the same public/private keys can be used in some other algorithms such as Schnorr.
- `secp256k1` was almost never used before Bitcoin became popular, but it is now gaining in popularity due to its several nice properties. Most commonly-used curves have a random structure, but secp256k1 was constructed in a special non-random way which allows for especially efficient computation. As a result, it is often more than 30% faster than other curves if the implementation is sufficiently optimized. Also, unlike the popular NIST curves, secp256k1's constants were selected in a predictable way, which significantly reduces the possibility that the curve's creator inserted any sort of backdoor into the curve.
To read more about Secp256k1: [click here](https://en.bitcoin.it/wiki/Secp256k1).


`I HAVE NOT FINISH THE FIRST WEEK MODULE YET, I'll update my notes soon.`


**Credits**: I'll be referencing my informations whether now or when I update this file in future from several sources such as Wikipedia, Alchemy bootcamp, FreeCodeCamp, Mastering Ethereum, official docs and other sources.
