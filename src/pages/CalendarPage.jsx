import React, { useState, useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./css/CalendarPage.css";
import useLanguageStore from "../store/languageStore";
import uiTranslations from "../content/live/uiTranslations";
import { Solar } from "lunar-javascript";

const CalendarPage = ({ events, localeMap }) => {
  const { language } = useLanguageStore();
  const translations = uiTranslations[language.code].calendar;
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter events for the selected date
  const eventsOnSelectedDate = events.filter(
    (event) => event.date === selectedDate.toISOString().split("T")[0]
  );

  const locale = localeMap[language.code];

  // Calculate lunar date using lunar-javascript
const lunarDateFormatted = useMemo(() => {
  try {
    const solar = Solar.fromDate(selectedDate);
    const lunar = solar.getLunar();

    const month = lunar.getMonth();
    const day = lunar.getDay();
    
    const isLeap = typeof lunar.getLeap === 'function' ? lunar.getLeap() : 
                   typeof lunar.isLeapMonth === 'function' ? lunar.isLeapMonth() :
                   lunar.leap !== undefined ? lunar.leap : false;

    return `${isLeap ? "Leap " : ""}${month}/${day}`;
  } catch (error) {
    console.error('Lunar conversion error:', error);
    return "";
  }
}, [selectedDate]);

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">{translations.calendarTitle}</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        locale={locale}
        tileContent={({ date }) => {
          const eventsOnDate = events.filter(
            (event) => event.date === date.toISOString().split("T")[0]
          );
          if (eventsOnDate.length === 0) return null;
          
          // Show first category if exists, else blue dot
          const eventWithCategory = eventsOnDate.find(event => event.category);
          return eventWithCategory ? (
            <div className="calendar-category">{eventWithCategory.category}</div>
          ) : (
            <div className="calendar-dot" />
          );
        }}
      />
      <div className="event-list-container">
        <h3 className="event-list-title">
          {selectedDate.toLocaleDateString(locale, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" — 🌓 " + lunarDateFormatted}
        </h3>
        {eventsOnSelectedDate.length > 0 ? (
          <ul className="event-list">
            {eventsOnSelectedDate.map((event) => (
              <li
                key={event.id}
                className="event-item"
                style={{ borderLeft: `6px solid ${event.color}` }}
              >
                {event.category && (
                  <span className="event-category">{event.category}</span>
                )}
                <h4 className="event-title">{event.title}</h4>
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                  />
                )}
                <p className="event-description">{event.description}</p>
                <p className="event-details">
                  🕒 {event.time} • 📍 {event.location}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-events">{translations.noEvents}</p>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;