from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson import json_util

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/gamestoredb'
mongo = PyMongo(app)

@app.route('/api/login', methods=['POST'])
def login():
    # Obter parâmetros de username e senha do corpo da solicitação
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Verificar se o usuário existe na base de dados
    user = mongo.db.usuarios.find_one({'username': username, 'senha': password})

    if user:
        # Usuário autenticado com sucesso
        return jsonify({'message': 'Login bem-sucedido'}), 200
    else:
        # Usuário não encontrado ou senha incorreta
        return jsonify({'message': 'Credenciais inválidas'}), 401


@app.route('/api/usuarios', methods=['GET'])
def get_usuarios():
    # Exemplo de consulta ao MongoDB
    usuarios_cursor = mongo.db.usuarios.find()

    # Converte o cursor para uma lista
    usuarios = list(usuarios_cursor)

    # Serializa a lista para JSON usando json_util
    json_usuarios = json_util.dumps(usuarios)

    # Retorna a resposta JSON
    return json_usuarios, 200, {'Content-Type': 'application/json'}

@app.route('/api/produtos', methods=['GET'])
def get_produtos():
    # Exemplo de consulta ao MongoDB
    produtos_cursor = mongo.db.produtos.find()

    # Converte o cursor para uma lista
    produtos = list(produtos_cursor)

    # Serializa a lista para JSON usando json_util
    json_produtos = json_util.dumps(produtos)

    # Retorna a resposta JSON
    return json_produtos, 200, {'Content-Type': 'application/json'}

if __name__ == '__main__':
    app.run(debug=True)