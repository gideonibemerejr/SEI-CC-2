<img src="https://i.imgur.com/s8QeOpo.png">

# Intro to Django Models

## Learning Objectives

| Students will be able to: |
|---|
| Define a Django Model for a data entity |
| Generate migrations when Models are added or updated |
| Run pending migrations |
| Implement a Details page for a single model instance |

## Roadmap

1. Review Django Architecture
2. Review the Starter Code
3. What's a Model?
4. Models in Django
5. Making and Running Migrations
6. Performing CRUD Using Django's ORM
7. On to the Code!
8. I am the Admin!
9. Adding a Cat "Details" Page

## Review Django Architecture

Okay, one last time I present, the overall architecture of the Django framework:

<img src="https://i.imgur.com/1fFg7lz.png">
	
This lesson focuses on the **Model layer** connecting the **View** to the **database**.

## Review the Starter Code

The only change to the starter code from where the last lesson left off is that the `home` view now renders a **home.html** template instead of using `HttpResponse` to send back a string.

Note that since the `HttpResponse` function is no longer being used in **views.py**, its import has been removed.

## What's a Model?

**Models** are used to perform CRUD data operations on a database.

Remember **entities** in the Entity-Relationship-Diagrams?

A Django Model represents a single entity from the ERD.

Thus, a Model has a one-to-one mapping with a table in the database.

Again, a Model is what allows us to write code to create, read, update and delete data from a table in the database.

When we retrieve data from the database (using a Model of course), we will have **model objects**, each of which represents a row in a database table. Model objects are also called _instances_ of the Model.

> When the word "Model" is capitalized, it's referring to a Model for an entity from a model instance, which will be in lower case.

## Models in Django

Each Model is defined as a Python class that inherits from `django.db.models.Model`.

Here's the **Cat** entity from an ERD and the code to define the equivalent Model:

<img src="https://i.imgur.com/gwlOAXc.png">

All of the Models for an app are defined in the app's `models.py` file.

Let's create the `Cat` Model by typing in the above code.

Note that each field (attribute) is represented by a Field class, e.g., `CharField`. Here are the [docs of available Field types](https://docs.djangoproject.com/en/2.1/ref/models/fields/#model-field-types) - there's plenty of options.

It's important to note that the Field types for a Model don't just determine the column's data type in the table, Django also uses this information:

- To determine the default HTML [widget](https://docs.djangoproject.com/en/2.1/ref/forms/widgets/) to render in forms for the Model. For example, a `CharField` uses a `<input type="text">` as its _widget_, whereas, a `TextField` uses a `<textarea>`.
- To implement some validation in automatically-generated forms

#### Review Questions

<details>
	<summary>
		In Django, what is used to perform CRUD database operations?
	</summary>
	<p>A Model</p>
</details>

<details>
	<summary>
		How is a Model defined in Django?
	</summary>
	<p>With a Python class</p>
</details>

<details>
	<summary>
		An ERD Entity maps to a _____ in Django, which maps to a _____ in the database.
	</summary>
	<p>An ERD Entity maps to a Model in Django, which maps to a table in the database.</p>
</details>

## Making and Running Migrations

#### What are Migrations?

[Migrations](https://docs.djangoproject.com/en/2.1/topics/migrations/) are used to update a database's schema (structure) to match the code in the Models.

Migrations are used to evolve a database over time - as the requirements of the application change.  However, they can be "destructive" (cause a loss of data), so be careful with migrations if you're working with an application in _production_.

Migrations in Django are just Python files that are created by running a command Django in Terminal.

#### Making Migration Files

Okay, we've defined a `Cat` Model, but the database does not yet have a table to hold all of our furry model instances (rows). 

The following command creates migration files for all models that have been added or changed since the last migration:

```bash
$ python3 manage.py makemigrations
```

The output in the terminal informs us that the following migration file was created: `main_app/migrations/0001_initial.py`

A `migrations` directory is created for an **app** the first time you run `makemigrations`.

You don't have to do anything with the migration files, but since this is the first time we've made one, let's open it and take a peek.

> You should rarely need to edit migration files by hand, but it’s entirely possible to do so if you ever need to.

#### Running Migrations

Simply creating migration files does not update the database. 

To synchronize the database's schema with the code in the migration files, we "migrate" using this command:

```bash
$ python3 manage.py migrate
```

`OK` messages are a good thing :)

#### What Exactly Was Created in the Database?

To checkout the tables we have in our database, open psql:

```
$ psql
```

List all databases:

```sql
\l
```

Connect to the `catcollector` database:

```sql
\c catcollector
```

List the tables:

```sql
\d
```

You'll find quite a few tables named like `django_*`.  These tables are used by the framework to track migrations, server-side sessions, etc.

You'll also find several tables named like `auth_*`.  These were created by the `dango.contrib.auth` app that's listed in the `INSTALLED_APPS` variable within `settings.py`.

Finally, there's our `main_app_cat` table that maps to our `Cat` Model. It's empty now - we'll change that in a bit, but first...

#### Review Questions

<details>
	<summary>
		What are used to update a database's schema over time, as an application's functionality evolves over time?
	</summary>
	<p>Migrations</p>
</details>

<details>
	<summary>
		When is it necessary to make and run migrations?
	</summary>
	<p>Whenever a Model is added or changed.</p>
</details>

## Performing CRUD Using Django's ORM

#### What's an ORM?

ORM stands for Object-Relational-Mapper.

It's called that because it creates Python objects from rows in a relational database table and vice-versa.

The ORM allows developers to write object-oriented code to interact with a database instead of SQL.

ORMs make application developers more productive.

The fact is, the ORM in Django can generate SQL that even the most experienced developer would struggle to write.

Another benefit is that the ORM & Model layer abstracts away the differences between the flavors of SQL that exists - we get to write the same Python code to perform CRUD operations, regardless of which database is being used.

#### Django's ORM

The Django ORM is automatically going to generate, a plethora of methods for each Model.

Django's ORM will have methods for performing:

- Filtering (querying based on criteria)
- Ordering
- Even accessing the data from related Models!

Django refers to the ORM functions available as its [database API](https://docs.djangoproject.com/en/2.1/topics/db/queries/). Additional documentation can be [found here](https://docs.djangoproject.com/en/2.1/ref/models/).

#### Performing CRUD in a Python Interactive Shell

After creating a new Model, it's a best practice to take it for a test drive using a Python shell:

```
$ python3 manage.py shell
```

Any model you want to work with must be imported just like you will have to do in the application:

```python
>>> from main_app.models import Cat
```

> **Key Point:** Before we start CRUDing away, know that everything we're going to do can be done in your application's code!

To see all of our Cat objects, enter this command:

```python
>>> Cat.objects.all()
<QuerySet []>
```

##### Django Model Manager

Any time you want to perform query operations on a **Model** to retrieve _model objects_ (rows) from a database table, it is done via a **Manager** object.

By default, Django adds a Manager to every Model class - this is the `objects` attribute attached to `Cat` above.

##### **The `<QuerySet>`**

The `<QuerySet []>` returned represents a database query that can be refined by chaining additional methods to it.

Ultimately though, when the app needs the data, for example, to iterate over cats, the query will be sent to the database and the result is a `list`-like object that represents a collection of model instances (rows) from the database.

Besides `Cat.objects.all()`, let's see some of the other common ORM operations...

#### Give Me a "C"

Here's how we can create an in-memory model (an instance of a Model) and then save it to the database:
 
```python
>>> c = Cat(name="Biscuit", breed='Sphinx',
>>> description='Evil looking cuddle monster. Hairless', age=2)
>>> c.__dict__
{..., 'id': None, 'name': 'Biscuit', 'breed': 'Sphinx',
 'description': 'Evil looking cuddle monster. Hairless', 'age': 2}
>>> c.save()
>>> c.id
1
```

If you call `Cat.objects.all()` again you'll see a `Cat` object exists now:

```python
>>> Cat.objects.all()
<QuerySet [<Cat: Cat object (1)>]>
```

##### Your Turn

Create another `Cat` with attribute values of your choice.

Note that you can re-use the variables in your code, such as `c` above, unless there's a reason you have to "remember" the current object held by `c`.

Check that your cat was added by using `Cat.objects.all()`.

##### Adding a `__str__` Method

It's a best practice to override the `__str__` method in Models so that they will print in a more helpful way.

For the `Cat` model, we'll code `__str__` to return the cat's `name` attribute:

```python
# main_app/models.py
...
    age = models.IntegerField()

	# new code below
    def __str__(self):
        return self.name
```

Note that changes to a Model do not become active in the shell unless you `exit()`, re-launch, and re-import the Models.

#### Give Me a "U"

A single attribute value can be updated by simply assigning the new value and calling `save()`:

```python
>>> from main_app.models import Cat
>>> c = Cat.objects.all()[0]
>>> c
<Cat: Biscuit>
>>> c.name = 'Rubber Biscuit'
>>> c.save()
>>> c
<Cat: Rubber Biscuit>
```

#### Filtering (querying) for Records

We can use `objects.filter()` to query a Model's table for data that matches a criteria.

For example, this query would return all cats with the name "Rubber Biscuit":

```python
>>> Cat.objects.filter(name='Rubber Biscuit')
<QuerySet [<Cat: Rubber Biscuit>]>
```

Using `objects.filter()` and `objects.exclude()` is like writing a `WHERE` clause in SQL.

The Django ORM creates several helpful [Field lookups](https://docs.djangoproject.com/en/2.1/topics/db/queries/#field-lookups).

For example if we wanted to query for all cats whose names _contain_ a string:

```python
>>> Cat.objects.filter(name__contains='Bis')
<QuerySet [<Cat: Rubber Biscuit>]>
```
The above's SQL equivalent would be something like:

```sql
SELECT * FROM main_app_cat WHERE name LIKE '%Bis%';
```

As another example, here's how we can find cats that have an age _equal to or less than_ 3:

```python
>>> Cat.objects.filter(age__lte=3)
<QuerySet [<Cat: Biscuit>]>
```

For basic lookups, the format is:  `field__lookuptype=value` (that's a double underscore).

The above `filter` operation is similar to executing the following SQL:

```sql
SELECT * FROM main_app_cat WHERE age <= 3;
```

Filters can even be chained!

Like most things in SEI, learning how to use `filter()` will take practice.

#### Read One Record

You've seen how `Cat.objects.all()` and `Cat.objects.filter()` returns a list of objects.

However, it's a very common data operation to read one specific model object from the table based on some provided value, usually its `id`. 

Instead of the `objects.all()` method, we can use the `get()` method like this:

```python
Cat.objects.get(id=1)
```

The `get()` method can also be called with multiple `field=value` arguments to query multiple columns.

Be sure to use error handling if there's a chance that `get()` won't find what you're looking for because if Django doesn't find it, an error is raised.

#### What About Ordering (sorting)?

Similar to what you saw in SQL, there's an `order_by` method:

```python
>>> Cat.objects.order_by('name')
``` 

Or in descending order:

```python
>>> Cat.objects.order_by('-age')
```

The `<QuerySet>` object can be indexed and sliced like other sequences too.

Poor old cat:

```python
>>> Cat.objects.order_by('-age')[0]
```

## On to the Code!

Time to add some of this ORM magic to the  Cat Collector app!

Currently, we are "faking" the data with a `list` of cats.

Time to update **main_app/views.py**...

First let's be sure to remove the `class Cat...` and the `cats` list.

Now let's write the code that uses the `Cat` Model to read all of the cat objects:

```python
# main_app/views.py

from django.shortcuts import render
from .models import Cat

...

def cats_index(request):
  cats = Cat.objects.all()
  return render(request, 'cats/index.html', { 'cats': cats })
```

Don't forget to import the `Cat` Model too!

Refresh the page and you should see something like this:

<img src="https://i.imgur.com/FN26kDm.png">

## I am the Admin!

But wait, there's another really REALLY neat thing - Django comes with built-in administrator functionality! Remember that `django.contrib.auth` in the `INSTALLED_APPS`? Let's use it!

The _super user_ (administrator) is basically the owner of the site. When you are logged in to this account, you can access the Admin app to add additional users and manipulate Model data.

Run this command in the terminal:

```bash
$ python3 manage.py createsuperuser
```

Django will want you to create a password that's at least 3 characters long and complex, however, you can bypass it by typing `y` at the warning prompt.

You will prompted to enter a username, email address, and a password. You are now creating a 'web master' for your site!

Now go to your webpage and head over to the `/admin` route to see an _administration_ portal!  

Did you mess up your password? It's okay. No big fish. Go back to your terminal and use this handy command:

```bash
python3 manage.py changepassword <user_name>
```

But I don't see **Cats**!  That's because in order to manipulate Cat data, we need to **register** the `Cat` model so that the admin portal knows about.

We register our Models in the `main_app/admin.py` file:

```python
from django.contrib import admin
# import your models here
from .models import Cat

# Register your models here
admin.site.register(Cat)
```

No need to restart the server - just refresh that beauty portal!

We can add, edit, and remove data objects anytime we need to by browsing to `/admin`. Neat!

## Adding a Cat "Details" Page

Typically, the _index_ page showing all cats would only show a "summary" of each cat's info.  For example, just their "name" perhaps.

It's common to show the "details" for an object in the database using a separate page that is activated by clicking on that summary info - in this case, the cat's "card" in **index.html**.

#### Typical Process to Add Functionality to an App

Remember, nothing is going to happen unless an HTTP request leaves the browser informing the server what the app wants to do.

When adding additional functionality to a web app we need to do the following:

1. Decide the appropriate _HTTP method_ and _URL_ combination of the HTTP request. Generally, this follows RESTful conventions, but with Django, we focus on the URL.
2. Add the UI that is going to trigger the HTTP request to be sent to the server. For example, adding a `<form>` to submit a new cat.
3. Code the route on the server.  In the case of Django, this is done by adding an additional `path(...)` to the `urlpatterns` list within the app's `urls.py` module. **Each route item determines what code will run when the URL matches an HTTP request**.
4. Now you need to add the _view function_ referenced by the `path(...)` inside of the **views.py** module. The _view function_ will ultimately responds to the client with a **redirect** (after performing CUD) or by **rendering** a _template_ when getting data.
5. If a _template_ is required, time to write it, and you're done - other than debugging :)

More or less, following the above steps in order is a good thing to do.  Generally starting with the browser sending an HTTP request, and coding each step of the way, ending with the template used to generate the HTML returned to the browser.

##### Step 1

In Django, we don't worry about the HTTP method (verb), unless we're writing a `<form>` to do searching, in which case, we would switch from the form's default method of `POST` to a `GET`.

So what's the URL for viewing a single cat's detail page?

For sure we need to "capture" the `id` of the cat we want the details for in the URL. We use angle brackets to declare a _URL parameter_ to capture values within the _segments_ of a URL.

Let's go with this: `cats/<int:cat_id>/`

The `int:` part is called a converter and it's used to match and convert the captured value from a string into, in this case, an integer.

##### Step 2

As far as the UI is concerned, clicking on a cat's "card" in the **index.html** should trigger the request to the server to view the details of a cat.

We can accomplish this by wrapping the card's content with an `<a>` tag and setting its `href` appropriately:

```html
<div class="card">
  <!-- add this line below -->
  <a href="/cats/{{ cat.id }}">
    <div class="card-content">
        <span class="card-title">{{ cat.name }}</span>
        <p>Breed: {{ cat.breed }}</p>
        <p>Description: {{ cat.description }}</p>
        {% if cat.age > 0 %}
           <p>Age: {{ cat.age }}</p>
        {% else %}
           <p>Age: Kitten</p>
        {% endif %}
    </div>
    <!-- and this one below as well -->
  </a>
</div>
```

After refreshing the page, hover over a cat card and check the URL in the bottom-left of the browser window. It should look something like:<br>`localhost:8000/cats/2`.

Cool, on to the next step...

##### Step 3

Now that clicking a cat card is going to send a request like `GET /cats/1`, we need to add a new route entry to the `urlpatterns` list in **urls.py** that will match this request:

```python
urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  path('cats/', views.cats_index, name='index'),
  # new route below 
  path('cats/<int:cat_id>/', views.cats_detail, name='detail'),
]
```

We've decided that the newly added route will invoke an appropriately named _view function_, `cats_detail`.  That's next...

##### Step 4

As you know, _view functions_ are defined within **views.py**.

Here's the new `cats_detail` function:

```python
# main_app/views.py

...

def cats_detail(request, cat_id):
  cat = Cat.objects.get(id=cat_id)
  return render(request, 'cats/detail.html', { 'cat': cat })
```

The `cats_detail` function is using the `get` method to obtain the cat object by its `id`.

> Any captured URL parameters will be passed in as arguments to the view function!

**What determined the parameter name of cat_id in the cars_detail view function?**

##### Step 5

The `cats_detail` view function is passing a dictionary of data (called the _context_) to a template called **detail.html**.

So we want to render the cat data within a **detail.html** template...

Create the **detail.html** template:

```
$ touch main_app/templates/cats/detail.html
```

Now let's add the following template code:

```html
{% extends 'base.html' %}
{% block content %}

<h1>Cat Details</h1>

<div class="card">
  <div class="card-content">
    <span class="card-title">{{ cat.name }}</span>
    <p>Breed: {{ cat.breed }}</p>
    <p>Description: {{ cat.description }}</p>
    {% if cat.age > 0 %}
      <p>Age: {{ cat.age }}</p>
    {% else %}
      <p>Age: Kitten</p>
    {% endif %}
  </div>
</div>

{% endblock %}
```

It's basically the same cat "card" from **index.html**, except the wrapping `<a>` tags have been removed.

**What's that `{% extends 'base.html' %}{% block content %}` business about?**

Okay, let's refresh and check it out!

<img src="https://i.imgur.com/mee5Cxv.png">

##### Removing Hand-coded URLs in Templates

Although everything works nicely, hand-coding the URLs in templates, is not considered a good practice because during development, URL's may change.

For example, in **index.html**, we find:

```html
...
<div class="card">
  <a href="/cats/{{ cat.id }}">
  ...
```

Django has a better way!

Let's take another look at the `urlpatterns` in **urls.py**:

```python
urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  path('cats/', views.cats_index, name='index'),
  path('cats/<int:cat_id>/', views.cats_detail, name='detail'),
]
```

That `name` argument within each `path` is used to obtain the correct URL in templates using DTL's `url` template tag!

In **index.html**, replace this code:

```html
<a href="/cats/{{cat.id}}">
```

With this code:

```html
<a href="{% url 'detail' cat.id %}">
```

Congrats!

## Lab

For practice, do everything we did in this lesson on your Finch Collector project!

Don't forget to make commits.

## Resources

[Django Model API](https://docs.djangoproject.com/en/2.1/ref/models/)