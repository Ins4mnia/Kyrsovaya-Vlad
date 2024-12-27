package repository

import "github.com/noodypv/kursovaya/internal/model"

func (r *Repository) GetById(id int) (*model.News, error) {
	var news model.News

	err := r.db.First(&news, model.News{
		Id: id,
	}).Error

	return &news, err
}
