
import React, { Component } from "react";



var nba = [
  {
"name" : " Hawks",
"city" : " Atlanta"
   },
   {
    "name" : " Celtics",
    "city" : "Boston"
       },
       {
        "name" : " Nets",
        "city" : "Brooklyn"
           },
           {
            "name" : " Hornets",
            "city" : "Charlotte"
               },
               {
                "name" : "Bulls ",
                "city" : "Chicago"
                   },
                   {
                    "name" : " Cavaliers",
                    "city" : "Cleveland"
                       },
                       {
                        "name" : " Mavericks",
                        "city" : "Dallas"
                           },
                           {
                            "name" : "Nuggets ",
                            "city" : "Denver"
                               },
                               {
                                "name" : " Pistons",
                                "city" : "Detroit"
                                   },
                                   {
                                    "name" : " Warriors",
                                    "city" : "Golden State"
                                       },
                                       {
                                        "name" : " Rockets",
                                        "city" : "Houston "
                                           },
                                           {
                                            "name" : "Pacers ",
                                            "city" : "Indiana"
                                               },
                                               {
                                                "name" : " Clippers",
                                                "city" : "Los Angeles"
                                                   },
                                                   {
                                                    "name" : " Lakers",
                                                    "city" : "Los Angeles"
                                                       },
                                                       {
                                                        "name" : " Grizzlies",
                                                        "city" : "Memphis "
                                                           },
                                                           {
                                                            "name" : "Heat ",
                                                            "city" : "Miami"
                                                               },
                                                               {
                                                                "name" : "Bucks ",
                                                                "city" : "Milwaukee"
                                                                   },
                                                                   {
                                                                    "name" : " Timberwolves",
                                                                    "city" : "Minnesota"
                                                                       },
                                                                       {
                                                                        "name" : "Pelicans ",
                                                                        "city" : "New Orleans"
                                                                           },
                                                                           {
                                                                            "name" : " Knicks",
                                                                            "city" : "New York"
                                                                               },
                                                                               {
                                                                                "name" : " Thunder",
                                                                                "city" : "Oklahoma City"
                                                                                   },
                                                                                   {
                                                                                    "name" : "Magic ",
                                                                                    "city" : "Orlando"
                                                                                       },
                                                                                       {
                                                                                        "name" : "76ers ",
                                                                                        "city" : "Philadelphia"
                                                                                           },
                                                                                           {
                                                                                            "name" : "Suns ",
                                                                                            "city" : "Phoenix"
                                                                                               },
                                                                                               {
                                                                                                "name" : " Trail Blazers",
                                                                                                "city" : "Portland"
                                                                                                   },
                                                                                                   {
                                                                                                    "name" : "Kings ",
                                                                                                    "city" : "Sacramento"
                                                                                                       },
                                                                                                       {
                                                                                                        "name" : "Spurs ",
                                                                                                        "city" : "San Antonio"
                                                                                                           },
                                                                                                           {
                                                                                                            "name" : "Raptors ",
                                                                                                            "city" : "Toronto"
                                                                                                               },
                                                                                                               {
                                                                                                                "name" : "Jazz ",
                                                                                                                "city" : "Utah"
                                                                                                                   },
                                                                                                                   {
                                                                                                                    "name" : "Wizards ",
                                                                                                                    "city" : "Washington"
                                                                                                                       },
]  
                                                                                                                                                               

var team = [];
nba.forEach(function(obj){
    team.push(obj.name);
})
console.log(team)