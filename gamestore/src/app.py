from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson import json_util, ObjectId 

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/gamestoredb'
mongo = PyMongo(app)

@app.route('/api/login', methods=['GET'])
def login():
    data = request.get_json()
    username = data.get('username')
    senha = data.get('senha')
    user = mongo.db.usuarios.find_one({'username': username, 'senha': senha})
    if user:
        return jsonify({'message': 'Login bem-sucedido'}), 200
    else:
        return jsonify({'message': 'Credenciais inválidas'}), 401

@app.route('/api/admin/login', methods=['GET'])
def login_admin():
    data = request.get_json()
    username = data['username']
    senha = data['senha']
    user = mongo.db.usuariosadmin.find_one({'username': username, 'senha': senha})
    if user:
        return jsonify({'message': 'Login bem-sucedido'}), 200
    else:
        return jsonify({'message': 'Credenciais inválidas'}), 401
    
@app.route('/api/produtos', methods=['GET'])
def get_produtos():
    produtos_cursor = mongo.db.produtos.find()
    produtos = list(produtos_cursor)
    json_produtos = json_util.dumps(produtos)
    return json_produtos, 200, {'Content-Type': 'application/json'}

@app.route('/api/produtos', methods=['POST'])
def cadastrar_produto():
    data = request.get_json()
    if 'product_name' not in data or 'product_desc' not in data or 'product_price' not in data:
        return jsonify({'message': 'Campos obrigatórios ausentes'}), 400
    produto = {
        'product_name': data['product_name'],
        'product_desc': data['product_desc'],
        'product_price': data['product_price'],
        'product_image': data['product_image']

    }
    produto_inserido = mongo.db.produtos.insert_one(produto)
    return jsonify({'message': 'Produto cadastrado com sucesso', 'product_id': str(produto_inserido.inserted_id)}), 201

@app.route('/api/produtos/<string:product_id>', methods=['PUT'])
def alterar_produto(product_id):
    data = request.get_json()
    if 'product_name' not in data or 'product_desc' not in data or 'product_price' not in data:
        return jsonify({'message': 'Campos obrigatórios ausentes'}), 400
    produto_atualizado = {
        'product_name': data['product_name'],
        'product_desc': data['product_desc'],
        'product_price': data['product_price'],
        'product_image': data['product_image']
    }
    mongo.db.produtos.update_one({'_id': ObjectId(product_id)}, {'$set': produto_atualizado})
    return jsonify({'message': 'Produto alterado com sucesso'}), 200

@app.route('/api/produtos/<string:product_id>', methods=['GET'])
def obter_produto_por_id(product_id):
    produto = mongo.db.produtos.find_one({'_id': ObjectId(product_id)})
    if produto:
        produto['_id'] = str(produto['_id'])
        return jsonify(produto), 200
    else:
        return jsonify({'message': 'Produto não encontrado'}), 404

@app.route('/api/produtos/<string:product_id>', methods=['DELETE'])
def deletar_produto(product_id):
    produto = mongo.db.produtos.find_one({'_id': ObjectId(product_id)})
    if not produto:
        return jsonify({'message': 'Produto não encontrado'}), 404
    mongo.db.produtos.delete_one({'_id': ObjectId(product_id)})
    return jsonify({'message': 'Produto deletado com sucesso'}), 200

if __name__ == '__main__':
    app.run(debug=True)
