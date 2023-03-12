hora
---
- what does it do?
    - nothing

How to Run?
---
- Create a new venv `horaenv`
    - ```python3 -m venv horaenv```
- Activate the venv
    - ```source horaenv/bin/activate```
- Install all the dependencies using the requirements.txt
    - ```pip install -r requirements.txt```
- Run below command in bash to get url if GitHub Codespace is being used
    - ```echo ${CODESPACE_NAME}-5000.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}```
    - Then copy it into the url variable in the controller
- Run the application
    - ```flask run```
