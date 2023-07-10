package handlers

import (
	"bytes"
	"html/template"
	"net/http"
	"path/filepath"
)

func HandleHome(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, "The page doesn't exists !", http.StatusNotFound)
		return
	}

	RenderTemplate(w, "index", nil)
}

func HandleCommand(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/command" {
		http.Error(w, "The page doesn't exists !", http.StatusNotFound)
		return
	}

	RenderTemplate(w, "command", nil)
}

func RenderTemplate(w http.ResponseWriter, tmplName string, td interface{}) {
	templateCache, err := CreateTemplateCache()
	if err != nil {
		panic(err)
	}
	tmpl, ok := templateCache[tmplName+".html"]
	if !ok {
		http.Error(w, "The template doesn't exist !", http.StatusInternalServerError)
		return
	}
	buff := new(bytes.Buffer)
	tmpl.Execute(buff, td)
	buff.WriteTo(w)
}
func CreateTemplateCache() (map[string]*template.Template, error) {
	cache := map[string]*template.Template{}
	pages, err := filepath.Glob("./templates/*.html")
	if err != nil {
		return cache, nil
	}
	for _, page := range pages {
		name := filepath.Base(page)
		tmpl := template.Must(template.ParseFiles(page))
		if err != nil {
			return cache, nil
		}
		cache[name] = tmpl
	}
	return cache, nil
}
