package model

type News struct {
	Id    int    `json:"id" gorm:"Column:id"`
	Title string `json:"title" gorm:"Column:title"`
	Body  string `json:"body,omitempty" gorm:"Column:body"`
	Photo string `json:"photo" gorm:"Column:photo"`
}

func (n *News) TableName() string {
	return "news"
}
