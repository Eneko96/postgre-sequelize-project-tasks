import Sequelize from 'sequelize'

export const sequelize = new Sequelize('dat61tap02qfkt', 'lysgnfztimwvxk', '73931435f96e798b95756b9a5b5fbbca83bc463a62bfd46247399a042eff9c60', {
  host: 'ec2-3-211-6-217.compute-1.amazonaws.com',
  dialect: 'postgres', 
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
})