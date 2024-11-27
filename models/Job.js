const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
    jobsTitle:{
        type: Sequelize.STRING,
    },
    jobsDescription:{
        type: Sequelize.STRING,
    },
    jobsSalary:{
        type: Sequelize.STRING,
    },
    company:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    new:{
        type: Sequelize.INTEGER,
    }
});

module.exports = Job;