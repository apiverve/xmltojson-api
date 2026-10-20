from setuptools import setup, find_packages

setup(
    name='apiverve_xmltojson',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='XML to JSON is an XML to JSON converter API that turns raw XML strings into structured JSON objects. Send any valid XML payload to receive an organized JSON tree preserving tags, attributes, and child elements.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/xmltojson?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
