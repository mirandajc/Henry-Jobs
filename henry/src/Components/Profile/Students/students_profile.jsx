import React from "react";
import { StudentProf,ProfCont,Name,DevStar, Banner, ImageProf,P,Follow,Ubicacion, Redes } from "../profileStyles/studentProfile";
import Rene from '../../images/rene.jpeg';
import {GrLocation} from 'react-icons/gr';
import {BsGithub, BsLinkedin}from 'react-icons/bs';
import {BsFillStarFill} from 'react-icons/bs'
import {SiGmail} from 'react-icons/all';
import {HiLocationMarker} from 'react-icons/all';
import { useParams } from "react-router-dom";

export default function StudentsProfile(){

    const { name , lastName } = useParams;

    console.log(name, lastName)

    return(
        <StudentProf>
            
            
            <ProfCont>
                <Banner>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAb1BMVEUApNP///8AotIAoNEAntAApdIAo9EAptP1/P1Pud38///f8/jm9vrx+vzH6PLL6vOT0ue04O7W7vXA5fGi2Ophv90fq9VZvNy34e9tw99gvt2q3OyBy+Oc1ek6s9h3x+J/yOKp1ueKz+Urr9dBtNm6IvUXAAANEUlEQVR4nO1da5eqOgzVtCoq+EBF8TlX/f+/8YJ6xiak0FZH6lrd386cGaAhTXYeDZ1OQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCsAEBJEv9frCyEFwJ/dpQCUd4G/u8unUCwmW8826TiJomSczmfbrPjRmxdVXLGTbQ/z37uc14O33+SDADE4TaMuxni+eueiyheTz2Nyk2hy6n2p4EBmu6TLYVQsSr5lUSAH++mIvUl0yMQ7bvFhiP6BXc5DcvOrfHVVhaKtF7zM7veYfZ+Nk2u6cSjSvPPKPirczGnccIvxVb5vRR8AwKxhRbdV7fuuGleYzX3Teymx/yYLB52NwZIKxDk4CU70jYRWYPc9GxU6C7M1FUi39voAIm/ank/Mv0ZuwlxqBSYXO68K8ji1uf7uS+ybrHOhDEYHm50qeku7y3fPXyE3kVsuqzBxa9OdCnJlaNQUrL+AwEFWQ6W02A2MliYyq/3/QJz5b95ExYlG08NpPRyuT4eFXlPidbOFK1SNDzsKjOLN7H6XZVp5bzvv1U2sqTzOWZmbgFuOAi4/E50yHppcHvR3mj+NFj8XeN7lcqDSHfqubkCoQbH71EcGIbOflF98eqlVCnnUsI70RHIDRTRM9vLUc3Wj/uBU3XqFPlx5CxXl+o0K8sT+zWh+lFV/AvKMf23tt7oJrBEn3veDvOzYvbrUbVTozFlBLzONpIncpl6TEBhiKWgfthAcG3+lfLZHXNgNusv0xEVgOV98VjeJnjXt1z2rGHJkP+GSFnJLk503DTrWOV8YILe99Ni6QR9tvQb/BXDi+ER1Y4sz82vxqoEiixV6HR6LDTuERaM9EQOOUhywPEBw0dSy1ygHgTy2xxxEIg95bX5QYLOZKGkBvQmjarX78wGxRXL2V92EuulSs3CJ47Dp4FcoImOcgdbhkmurr2Tsr7Yd1bXtzV4vyLxq4cb/HKo4VrXRJA67/zFKxXgbmIq902OKrOpSo+NNbmJddaELs6i/AFzVv1v5ukulSsXG5gQTRDVDFw0FdYZ3nC2ywaCqqrfGTTo/pVxVtGq0lrKauUvWNnQf0Uhf41Loqaxta2VKuDAg31d+pAkitFf9USXet1vOx3BRV2hpgaFnUOyyLadg4+apT0Bk15qVcwaOwMas3a85UJ20p4QXxUCpfcpBVjclwsr+kij7d/LTuAmVuLqU2SRDN57qO3S5ohq2zPwUG3rGg8sziqO2VhDXp351j6QaTE8ZiFRD5x+3JgUulCqhhFtW11PtZXNqoRWgENCOf/wCBmyhYdJzuxxiIJ4SN3iD2DrQZ+S2qM131kCoBQiz3MLHgcTm7O1BVPbp1Ln1ErZfJjaDZBsPMawUZ5KjcxucWrX1NHXUV93g0XWTZowzde5GQCWhxEuxQUdVE0exQcb2O6SOLuEbxNZTyaqb2KCnIyAdt+v5L7Y32DYApm5wx9zJvCHbFn+B2Jw8qWBL73foS9V1j/RtntSl6ULWtpdrGiNq8XW8zYHuNrVhOjRFoijBU7EhnppbP6O4EjHFxKlG9n0cKJc18TMmRaH82TpNSalHnF0IhYut43nxn/LnG0/FpiaObLM00CGxaHIBcSX5t6ntGYOvSBy9kqasONFbwY92tNq6U6kSGk/TlEJ1hJZ9eLT78VEMlj/kx5buVHxDUlz19hbV5Q6jVv+OYFQ4iWX08Son+gAQJR/ZvFrIiBF7bka6eSOb1Bu+rnNS5o/hWicF2l4+ecocOqRBxCZHi+qkI7e8+p8DBuryLKIrSXq1xijfQYnJwaK5RO0h8bYqj4oJ5nxXkNb5BNNacSR5S/PWIVy59dMjEL5rXPGDKxHLkPwl7TtKjKMFRNsW3opNNd+m5bVKiq3KMag7TY3FptpFp8rtJ4DaAmNDsUniKjmeTM/1GnNpNTrzlLaR7FbXzAJTQstaoIpGmhlOfEbTV/5RPKa6NCNiCsTeJxn/axdM7CIjeoOIZNexHPEBCHVxJpsC+kSNlJxaecrxeWXiFqYmMkDRnqflvhLIlZqcfRWEse3l41Ro8X+9Xq/8lccZUXoAf2Zg3lBKxltHSnhrQ4dbKQ1JW5onk8l0HMdxkkR3JElS/HM8nU5ocWZYzhtrOD6kqrKn+Y8SiLhGvE8odUdKKbJrvp/V9LM1IZnt82t2u5RmXhs2ta5NKR8A7pUlPuE+ma5/Wf8cNlNtH5slRsl0M/tZX+5T78gNkWP3tHP3hr6qPr/HYG4KBtnwtFzEL+hXHaLx4nAaZqAKDzW3JX5mxO9APqGME24jFgfHfDmJXeZcWGIUL5b5dfAYs4hiBE97Au9AZxhjIcXg+rNL/0jDdIjS3ek6KF6Xel/rktAngejV6Lz8tMSeiKYHFMl62l1/B1x0y2gZI39jhBLSfgLRR+DzZIZykqvVjLDPYfP+ubXvwW2S6+JdfOztSDZ55p3kSpnpJrl6g2jyw+dXWkI5t+glmUVJnE4ni81hNtuf8nw7RNjm+Wk/mx02i8k0jaNXnPOobVH9AiSs6qbfGiAHkDcIIR4ZEIT7j8X9dzrATQUxRdvSuqNY0VEzylmLaEyaZDZ2JgeAVk7H5m/trwRhA5C9k2aoGIdRnO7O28uAzMZKbINsuGAxreXgsp3NUxPu8zeCsHp6mS1NWVpSjpXPOrfJ/7RzwaGBEB88jfu33B30s/V5Pq43fX8hCBuAPM6NjPO/CPE3MyHx6W6XrCvZpv8a1+55g9oo+H0CcAHoJtdRLK498nEJMqvMrJhCb09iODWzV8pODK4a2v360l+APGrPDxCklVNmpE3GrXpJCs6VggwIjflwW+87APJiKrRuNakqyIId8zkNwicq7YHYRMbPR/xFiuaG0TwX8YKuQ/yIXKg3xrPLdk9377joVwGwr6Npo8kpE1KVDKmyk7YEk7IdD9LcRdob8CwtCZf9tEWxgbzW8LRCZrdJrthVIj3AI9VeKfmSGYq4VQGXggpHe5tbO21JbNCvmYI+PWWPSa6oGQ/vUmKSXhn2Tc7MICOJ9+hdoqXk9qn7/ZyhnRdcFi0vz+m3eEKluksJT52/lDsU2DGprBklS58H+wrJvXJDJ4DQHiRbDHEmC89avDwvgae0W0dV5IGwd0meJ06xv2h1oLgYaAhkMqtMDMZ13Wc7HjHjhuME9Y+E3+OzWwF3lrTZoMUNOywx3jOf4cLnmH/tPqAZjA09kbd8UX2TB2lXGv1TXkBF7rhFZWPG0t0kkgOb9MG+9F+tjRgjfQmuFNjgOszz4XVQVwMg3Vsbwf3Y6fjue8CPQR+vhOZN4n68h+UnJ120/qD0eL8fVhjFm5NubHjlRTy2o7AdY/tHqByIKpHkdZ9FU7d0cj9HgU7pPrcUgZDbihGd6L55Qrb9nYTgRqP22uo5qY3OOk27AROnW8RIyAf/XRsQK5bkjDWCI6Py8uqNWmtr46bRLRpmRGKaXtZ28eA+zZQEoU8S8HckV715H0SpR21NrmdOsCfN84JxOHCpfMWJTenKU93YO3ZYINHhgtNg0tbWFC1Bz6gUHstgXjCg5RwkyYSzq2kaTsk2DQEKkpM+4HMO9hn3t4BGzN1uxHynhPk7ZJdjIEyXIx+0/bkK7hwLISFnOVDfT9LSqb7K55fGhsMOMQtY4bCKIx/0mB8HLs8ksTnEu7alD9HRw3fdiekpWEzdpmhtHPloGoN6B7PnCAlZok3bDmmrTAWbm1eCddn8LkvchS6LjTFijtZI/Zzjlkgb3Tg7i/q5PmHCGBztJC0DQdR8/a6d02m0rmaVgsFOQQXjEeunG6lg0iZSlzyN2nEI5Mzixm54idBQV2ZstsXnEqPqQ7ADBku8lgZ1BdGXseW7Azqk4gFm55h40X+w0FXXQY+vgXwnydor0XkLD+kzytaz6FljZv5Bj1W3lvp1JVq2fW2O/TwVxyEqNKcWzBQU4zt9AITo2w+HhAGjRFyNT1pU+dlxi9Bj2E7stOqXgXXAJfHPmSxmGgVOYjeCS54Ihiy3lDJCY3Iil+MQ9ER3ly8gAJ131wAmFwT9iro5tTK9AULNsrqNjKtyEG70iaBjsxqwMlK3TVv5SduD71VUOAhbrWpOfWCwuw+ourXDPsh3hBxjYspB2Dk7dMpHE9ipf1Td2jothB2po6Eg1IJvlRGWB454gwGYu7U1rA2JTVdnarwIGrKlGYYlLLrNS/AnarHbTly/sPAq8IpdtY30dLPk7y3aRiONlrLhb7JtxFCznqUmYcaCt210fFRbjhQZC7c2l0rVK+aGXNh6Uq4UUw1r2zJuaO+4TUiGitXi1M0uJOUFUk2KtjVlBlXWnXwC068dc6b6WPm1WjCPQsrMN7RE3PAOs5gI+QvOaHHqBlaH3TgWw2XgW6paYVfqoG5szpZzptKK7zIegc3vtpQSJ8RgZz8+nq2yMwad9I83gHHq7CfUWdfxP8p7nWyGLdsxAAAAAElFTkSuQmCC' alt='banner'/>
                </Banner>
                <ImageProf>
                    <img src={Rene} alt='profile'/>
                </ImageProf>
                <Name>
                    <h2>Rene Durmiente</h2>
                </Name>

                <Ubicacion>
                    <HiLocationMarker className="location"/>
                    <p>Mendoza - Argentina</p>
                </Ubicacion>
                <P>
                    <p>un ser magico de las praderas mendocinas</p>
                </P>


                <Redes>
                    <div>
                    <BsGithub className="gh"/>
                    </div>
                    <div>
                    <BsLinkedin className="ln"/>
                    </div>
                    <div>
                    <SiGmail className="mail"/>
                    </div>
                </Redes>

                <DevStar>
                    <p className="Si">Frontend</p>
                    <p className="Si" id="cent"><BsFillStarFill className="star"/>3.5</p>
                    <p id="cent">Graduado</p>
                </DevStar>


                <Follow>
                    <p>Follow</p>
                </Follow>

            </ProfCont>
            
            </StudentProf>
    )
}