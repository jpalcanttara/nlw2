import React, { useState, FormEvent } from "react";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    api
      .get("classes", {
        params: {
          subject,
          week_day: weekDay,
          time,
        },
      })
      .then((response) => {
        setTeachers(response.data);
      });
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader page="Estudar" title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Ciência", label: "Ciência" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Português", label: "Português" },
              { value: "Matemática", label: "Matemática" },
              { value: "Biologia", label: "Biologia" },
              { value: "Geografia", label: "Geografia" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            name="time"
            label="Hora"
            type="time"
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
