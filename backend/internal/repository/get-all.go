package repository

import "github.com/noodypv/kursovaya/internal/model"

func (r *Repository) GetNewsTitles() ([]model.News, error) {
	var news []model.News

	err := r.db.
		Select("title", "id", "photo").
		Find(&news).
		Error

	return news, err
}
