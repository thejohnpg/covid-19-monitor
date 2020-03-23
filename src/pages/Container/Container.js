import React, { useState, useEffect } from "react";

import "./Container.css";

import axios from "axios";
import moment from "moment";

export default function Container() {
  useEffect(() => {

    /* World Cases */
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
          }
        }
      )
      .then(response => {
        const data = response.data;
        setTotalCasesWorld(data.total_cases || 0);
        setTotalDeathsWorld(data.total_deaths || 0);
        setTotalRecoveredWorld(data.total_recovered || 0);
        setNewCasesWorld(
          data.new_cases || "Nenhum caso registrado até o momento (hoje)"
        );
        setNewDeathsWorld(data.new_deaths || 0);
        setStatisticTakenAt(data.statistic_taken_at || 0);
      }, []);
    /*  */

    /* Brazil Cases */
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Brazil",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
          }
        }
      )
      .then(response => {
        const data = response.data.latest_stat_by_country[0];
        setCases(data.total_cases || 0);
        setDeaths(data.total_deaths || 0);
        setTotaRecovered(data.total_recovered || 0);
        setNewDeaths(data.new_deaths || 0 );
        setNewCases(data.new_cases || 0);
        setSeriousCritical(data.serious_critical || 0);
        setActiveCases(data.active_cases || 0);
        setCasesPor1M(data.total_cases_per1m || 0);
      }, []);
    /*  */

    /* China Cases */
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=China",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
          }
        }
      )
      .then(response => {
        const dataChina = response.data.latest_stat_by_country[0];
        setChinaCases(dataChina.total_cases || 0);
        setChinaDeaths(dataChina.total_deaths || 0);
        setChinaTotaRecovered(dataChina.total_recovered || 0);
        setChinaNewDeaths(dataChina.new_deaths || 0);
        setChinaNewCases(dataChina.new_cases || 0);
        setChinaSeriousCritical(dataChina.serious_critical || 0);
        setChinaActiveCases(dataChina.active_cases || 0);
        setChinaCasesPor1M(dataChina.total_cases_per1m || 0);
      }, []);
    /* */

     /* Italy Cases */
     axios
     .get(
       "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Italy",
       {
         method: "GET",
         headers: {
           "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
           "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
         }
       }
     )
     .then(response => {
       const dataItaly = response.data.latest_stat_by_country[0];
       setItalyCases(dataItaly.total_cases || 0);
       setItalyDeaths(dataItaly.total_deaths || 0);
       setItalyTotaRecovered(dataItaly.total_recovered || 0);
       setItalyNewDeaths(dataItaly.new_deaths || 0 );
       setItalyNewCases(dataItaly.new_cases || 0);
       setItalySeriousCritical(dataItaly.serious_critical || 0);
       setItalyActiveCases(dataItaly.active_cases || 0);
       setItalyCasesPor1M(dataItaly.total_cases_per1m || 0);
     }, []);
   /* */

    /* USA Cases */
    axios
    .get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=USA",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
        }
      }
    )
    .then(response => {
      const dataItaly = response.data.latest_stat_by_country[0];
      console.log(dataItaly);
      setUsaCases(dataItaly.total_cases || 0);
      setUsaDeaths(dataItaly.total_deaths || 0);
      setUsaTotaRecovered(dataItaly.total_recovered || 0);
      setUsaNewDeaths(dataItaly.new_deaths || 0);
      setUsaNewCases(dataItaly.new_cases || 0);
      setUsaSeriousCritical(dataItaly.serious_critical || 0);
      setUsaActiveCases(dataItaly.active_cases || 0);
      setUsaCasesPor1M(dataItaly.total_cases_per1m || 0);
    }, []);
  /* */
  }, []);

  /* World Cases*/
  const [totalCasesWorld, setTotalCasesWorld] = useState(0);
  const [totalDeathsWorld, setTotalDeathsWorld] = useState(0);
  const [totalRecoveredWorld, setTotalRecoveredWorld] = useState(0);
  const [newCasesWorld, setNewCasesWorld] = useState(0);
  const [newDeathsWorld, setNewDeathsWorld] = useState(0);
  const [statisticTakenAt, setStatisticTakenAt] = useState(new Date());

  /* */

  /* Brazil Cases*/
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [totalRecovered, setTotaRecovered] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  const [newCases, setNewCases] = useState(0);
  const [seriousCritical, setSeriousCritical] = useState(0);
  const [activeCases, setActiveCases] = useState(0);
  const [casesPor1M, setCasesPor1M] = useState(0);
  /* */

  /* China Cases*/
  const [chinaCases, setChinaCases] = useState(0);
  const [chinaDeaths, setChinaDeaths] = useState(0);
  const [chinaTotalRecovered, setChinaTotaRecovered] = useState(0);
  const [chinaNewDeaths, setChinaNewDeaths] = useState(0);
  const [chinaNewCases, setChinaNewCases] = useState(0);
  const [chinaSeriousCritical, setChinaSeriousCritical] = useState(0);
  const [chinaActiveCases, setChinaActiveCases] = useState(0);
  const [chinaCasesPor1M, setChinaCasesPor1M] = useState(0);
  /* */

  /* Italy Cases*/
  const [italyCases, setItalyCases] = useState(0);
  const [italyDeaths, setItalyDeaths] = useState(0);
  const [italyTotalRecovered, setItalyTotaRecovered] = useState(0);
  const [italyNewDeaths, setItalyNewDeaths] = useState(0);
  const [italyNewCases, setItalyNewCases] = useState(0);
  const [italySeriousCritical, setItalySeriousCritical] = useState(0);
  const [italyActiveCases, setItalyActiveCases] = useState(0);
  const [italyCasesPor1M, setItalyCasesPor1M] = useState(0);
  /* */

  /* USA Cases*/
  const [usaCases, setUsaCases] = useState(0);
  const [usaDeaths, setUsaDeaths] = useState(0);
  const [usaTotalRecovered, setUsaTotaRecovered] = useState(0);
  const [usaNewDeaths, setUsaNewDeaths] = useState(0);
  const [usaNewCases, setUsaNewCases] = useState(0);
  const [usaSeriousCritical, setUsaSeriousCritical] = useState(0);
  const [usaActiveCases, setUsaActiveCases] = useState(0);
  const [usaCasesPor1M, setUsaCasesPor1M] = useState(0);
  /* */

  return (
    <div className="containerComponent">
      <div className="cardComponent">
        <div className="card">
          <span className="title">Brasil</span>
          <ul className="containerCard">
            <li>Casos:</li> <li>{cases}</li>
            <li className="">Novos Casos:</li> <li className="">{newCases}</li>
            <li className="liCasesGreen">Recuperados:</li>
            <li className="liCasesGreen">{totalRecovered}</li>
            <li className="liCasesOrange">Casos Críticos:</li>
            <li className="liCasesOrange">{seriousCritical}</li>
            <li className="liCasesOrange">Casos Ativos:</li>
            <li className="liCasesOrange">{activeCases}</li>
            <li className="liCasesOrange">Casos por Milhão:</li>
            <li className="liCasesOrange">
              {casesPor1M}a cada 1M de habitantes
            </li>
            <li className="liCasesRed">Mortes:</li>
            <li className="liCasesRed">{deaths}</li>
            <li className="liCasesRed">Mortes Hoje:</li>
            <li className="liCasesRed">{newDeaths}</li>
          </ul>
        </div>
        <div className="card">
          <span className="title">Mundo</span>
          <ul className="containerCard">
            <li>Total de Casos:</li> <li>{totalCasesWorld}</li>
            <li className="liCasesGreen">Total de Recuperados:</li>
            <li className="liCasesGreen">{totalRecoveredWorld}</li>
            <li className="liCasesOrange">Novos Casos:</li>
            <li className="liCasesOrange">{newCasesWorld}</li>
            <li className="liCasesRed">Total de Mortes:</li>
            <li className="liCasesRed">{totalDeathsWorld}</li>
            <li className="liCasesRed">Mortes Hoje:</li>
            <li className="liCasesRed">{newDeathsWorld}</li>
          </ul>
          <div className="containerCard">
            <span></span>
          </div>
        </div>

        <div className="card wide">
          <ul class="containerCard">
            <li className="title">China</li> <li></li>
            <li>Casos:</li> <li>{chinaCases}</li>
            <li className="">Novos Casos:</li>
            <li className="">{chinaNewCases}</li>
            <li className="liCasesGreen">Recuperados:</li>
            <li className="liCasesGreen">{chinaTotalRecovered}</li>
            <li className="liCasesOrange">Casos Críticos:</li>
            <li className="liCasesOrange">{chinaSeriousCritical}</li>
            <li className="liCasesOrange">Casos Ativos:</li>
            <li className="liCasesOrange">{chinaActiveCases}</li>
            <li className="liCasesOrange">Casos por Milhão:</li>
            <li className="liCasesOrange">
              {chinaCasesPor1M}a cada 1M de habitantes
            </li>
            <li className="liCasesRed">Mortes:</li>
            <li className="liCasesRed">{chinaDeaths}</li>
            <li className="liCasesRed">Mortes Hoje:</li>
            <li className="liCasesRed">{chinaNewDeaths}</li>
          </ul>
          <ul class="containerCard">
            <li className="title">Itália</li> <li></li>
            <li>Casos:</li> <li>{italyCases}</li>
            <li className="">Novos Casos:</li>
            <li className="">{italyNewCases}</li>
            <li className="liCasesGreen">Recuperados:</li>
            <li className="liCasesGreen">{italyTotalRecovered}</li>
            <li className="liCasesOrange">Casos Críticos:</li>
            <li className="liCasesOrange">{italySeriousCritical}</li>
            <li className="liCasesOrange">Casos Ativos:</li>
            <li className="liCasesOrange">{italyActiveCases}</li>
            <li className="liCasesOrange">Casos por Milhão:</li>
            <li className="liCasesOrange">
              {italyCasesPor1M}a cada 1M de habitantes
            </li>
            <li className="liCasesRed">Mortes:</li>
            <li className="liCasesRed">{italyDeaths}</li>
            <li className="liCasesRed">Mortes Hoje:</li>
            <li className="liCasesRed">{italyNewDeaths}</li>
          </ul>
          <ul class="containerCard">
            <li className="title">Estados Unidos</li> <li></li>
            <li>Casos:</li> <li>{usaCases}</li>
            <li className="">Novos Casos:</li>
            <li className="">{usaNewCases}</li>
            <li className="liCasesGreen">Recuperados:</li>
            <li className="liCasesGreen">{usaTotalRecovered}</li>
            <li className="liCasesOrange">Casos Críticos:</li>
            <li className="liCasesOrange">{usaSeriousCritical}</li>
            <li className="liCasesOrange">Casos Ativos:</li>
            <li className="liCasesOrange">{usaActiveCases}</li>
            <li className="liCasesOrange">Casos por Milhão:</li>
            <li className="liCasesOrange">
              {usaCasesPor1M}a cada 1M de habitantes
            </li>
            <li className="liCasesRed">Mortes:</li>
            <li className="liCasesRed">{usaDeaths}</li>
            <li className="liCasesRed">Mortes Hoje:</li>
            <li className="liCasesRed">{usaNewDeaths}</li>
          </ul>
        </div>
      </div>
      <div className="lastStatisticContainer">
        <span className="lastStatistic">{`${statisticTakenAt}.${moment().locale("pt-br")}`}</span>
      </div>
    </div>
  );
}
