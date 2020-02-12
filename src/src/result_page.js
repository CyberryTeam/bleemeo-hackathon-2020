import React from 'react';
import Chart from 'chart.js';
import Axios from 'axios';

const ResultPage = ({ onReturn, values}) => {
    const [members] = React.useState(values);
    const [members_pie_color, setColors] = React.useState([]);
    const members_pie_color_current = React.useRef(members_pie_color);
    const [king, setKing] = React.useState(-1);
    members_pie_color_current.current = members_pie_color;

    React.useEffect(() => {
        var members_pie = [];
        for (var i = 0; i < members.length; i++) {
            members_pie.push(1);
            setColors(colors => [...colors, 'rgba(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', 0.5)'])
        }

        setTimeout(() => {

            var data = {
                datasets: [{
                    data: members_pie,

                    backgroundColor: members_pie_color_current.current,
                }],

                labels: members
            };

            var ctx = document.getElementById("myChart");

            new Chart(ctx, {
                type: 'pie',
                data: data,
                options: {
                    legend: {
                        display: false
                    }
                }
            });
        }, 500);
    }, [])

    React.useEffect(() => {
        setKing(Math.floor(Math.random() * (members.length - 1)));
    }, [])

    React.useEffect(() => {
        Axios.post('localhost:443/metrics/job/react', "user_numbers " + members.length)
    }, [members])


    return (
        <div class="row">
            <div class="col-12 col-sm-6 py-4 d-flex justify-content-center flex-column">
                <p className="mb-0 ml-3">Members added:</p>
                <ul className="list-group w-75 ml-3">
                    {
                        members.map((el, i) => (<li className="list-group-item d-flex" style={{backgroundColor: members_pie_color[i]}}>{el} {i == king && <span class="badge badge-warning mb-0 pb-0 ml-3" style={{lineHeight: 1.5}}>King</span>}</li>))
                    }
                </ul>
            </div>
            <div class="col-12 col-sm-6 d-flex justify-content-center">
                <div class="w-75">
                    <canvas id="myChart" width="20vw" height="20vh"></canvas>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;