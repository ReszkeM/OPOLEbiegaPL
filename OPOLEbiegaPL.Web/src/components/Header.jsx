import React from 'react';

export default React.createClass({
    render: function() {
        var scope = {
             headerStyle: {
                backgroundImage: 'url(http://warszawskibiegacz.pl/wp-content/uploads/2015/02/drugi_zakres_bieganie_1.jpg)',
                backgroundSize: '100%',
                height: '500px',
                textAlign: 'center'
             },
             yellowTextStyle:{
                color: 'yellow',
                fontWeight: 'bold',
                fontFamily: 'Georgia'
             },
             blueTextStyle:{
                color: 'blue',
                fontWeight: 'bold',
                fontFamily: 'Georgia'
             },
             descriptionTextStyle: {
                fontFamily: 'Georgia',
                fontSize: '16px'
             }
        };

        return  <header style={scope.headerStyle}>
                    <div className="container">   
                        <div className="col-lg-12">
                            <h1 className="col-lg-12">
                                <span style={scope.yellowTextStyle}>OPOLE</span>
                                <span style={scope.blueTextStyle}>biega.pl</span>
                            </h1>
                            <span style={scope.descriptionTextStyle}>Amatorska grupa biegowa</span>
                        </div>
                    </div>
                </header>
    }   
});