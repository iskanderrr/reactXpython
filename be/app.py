from flask import Flask, render_template, request, render_template_string, jsonify
from datetime import datetime, timedelta
from sqlalchemy.sql import func
from modals import *
from config import Config
from flask_cors import CORS

app = Flask(__name__, static_folder="static", static_url_path='/lineoFundMe/static')
app.config.from_object(Config)
db.init_app(app)
CORS(app)


with app.app_context():
    db.create_all()

@app.post('/donations')
def create_donation():
    data = request.get_json()
    try:
        new_donation = Donation(
            name=data['name'],
            amount=data['amount']
        )
        db.session.add(new_donation)
        db.session.commit()
        return jsonify({'message': 'Donation created successfully!', 'donation': repr(new_donation)}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400


@app.get('/donations')
def get_all_donations():
    donations = Donation.query.all()
    donations_list = [{'id': d.id, 'name': d.name, 'amount': d.amount, 'date': d.date} for d in donations]
    return jsonify(donations_list)

@app.get('/donations/<int:id>')
def get_donation(id):
    donation = Donation.query.get(id)
    if donation:
        return jsonify({'id': donation.id, 'name': donation.name, 'amount': donation.amount, 'date': donation.date})
    return jsonify({'error': 'Donation not found'}), 404

@app.put('/donations/<int:id>')
def update_donation(id):
    data = request.get_json()
    donation = Donation.query.get(id)
    if not donation:
        return jsonify({'error': 'Donation not found'}), 404

    try:
        donation.name = data.get('name', donation.name)
        donation.amount = data.get('amount', donation.amount)
        db.session.commit()
        return jsonify({'message': 'Donation updated successfully!', 'donation': repr(donation)})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400
    
@app.delete('/donations/<int:id>')
def delete_donation(id):
    donation = Donation.query.get(id)
    if not donation:
        return jsonify({'error': 'Donation not found'}), 404

    try:
        db.session.delete(donation)
        db.session.commit()
        return jsonify({'message': 'Donation deleted successfully!'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400




