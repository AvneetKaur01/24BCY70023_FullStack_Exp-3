import React, { useState } from 'react';
import './PersonClasses.css';

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }
}

// Student class extending Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

// Teacher class extending Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

function PersonClasses() {
  const [people, setPeople] = useState([
    new Person('Alex Johnson', 30),
    new Student('Emma Watson', 20, 'Computer Science'),
    new Teacher('Dr. James Wilson', 45, 'Mathematics')
  ]);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    type: 'Person',
    extra: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = () => {
    if (!formData.name.trim() || !formData.age) {
      alert('Please enter both name and age!');
      return;
    }

    let newPerson;

    if (formData.type === 'Student') {
      if (!formData.extra.trim()) {
        alert('Please enter a major for the student!');
        return;
      }
      newPerson = new Student(
        formData.name.trim(),
        Number(formData.age),
        formData.extra.trim()
      );
    } else if (formData.type === 'Teacher') {
      if (!formData.extra.trim()) {
        alert('Please enter a subject for the teacher!');
        return;
      }
      newPerson = new Teacher(
        formData.name.trim(),
        Number(formData.age),
        formData.extra.trim()
      );
    } else {
      newPerson = new Person(
        formData.name.trim(),
        Number(formData.age)
      );
    }

    setPeople([...people, newPerson]);

    // Reset form
    setFormData({
      name: '',
      age: '',
      type: 'Person',
      extra: ''
    });
  };

  const handleRemove = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <div className="person-wrapper">
      <h1>Person Class Hierarchy</h1>

      {/* Add Person Form */}
      <div className="add-person-form">
        <h2>Add New Person</h2>
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="form-input"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Person">Person</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>

          {(formData.type === 'Student' || formData.type === 'Teacher') && (
            <input
              type="text"
              name="extra"
              placeholder={formData.type === 'Student' ? 'Major' : 'Subject'}
              value={formData.extra}
              onChange={handleChange}
              className="form-input"
            />
          )}

          <button onClick={handleAdd} className="add-btn">
            Add Person
          </button>
        </div>
      </div>

      {/* Display People */}
      <div className="persons-list">
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <div className="person-header">
              <h2 className="person-name">
                {person.name} (
                {person instanceof Student
                  ? 'Student'
                  : person instanceof Teacher
                  ? 'Teacher'
                  : 'Person'}
                )
              </h2>
              <button 
                onClick={() => handleRemove(index)} 
                className="remove-btn"
              >
                Remove
              </button>
            </div>
            
            <p className="person-age">Age: {person.age}</p>
            <p className="person-intro">{person.introduce()}</p>

            {person instanceof Student && (
              <p className="person-detail">
                <strong>Major:</strong> {person.major}
              </p>
            )}

            {person instanceof Teacher && (
              <p className="person-detail">
                <strong>Teaching:</strong> {person.subject}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonClasses;