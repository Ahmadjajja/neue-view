from openai import OpenAI


def embedd():
    client = OpenAI()
    return client.embeddings.create(
    model="text-embedding-ada-002",
    input="The food was delicious and the waiter...",
    encoding_format="float"
    )

res = embedd()
print(res)
