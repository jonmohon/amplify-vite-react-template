// src/pages/Dashboard.tsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';

const dataBar = [
  { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
];

const dataPie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const dataLine = [
  { name: 'Jan', smsSubscribers: 200 },
  { name: 'Feb', smsSubscribers: 400 },
  { name: 'Mar', smsSubscribers: 600 },
  { name: 'Apr', smsSubscribers: 800 },
  { name: 'May', smsSubscribers: 1000 },
  { name: 'Jun', smsSubscribers: 1200 },
];

const dataArea = [
  { name: 'Jan', openRate: 65, clickRate: 20 },
  { name: 'Feb', openRate: 72, clickRate: 22 },
  { name: 'Mar', openRate: 78, clickRate: 25 },
  { name: 'Apr', openRate: 85, clickRate: 30 },
  { name: 'May', openRate: 90, clickRate: 32 },
  { name: 'Jun', openRate: 95, clickRate: 35 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#fff', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Sales Data
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={dataBar}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Sales Distribution
            </Typography>
            <PieChart width={400} height={400}>
              <Pie
                data={dataPie}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {dataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </Paper>
        </Grid>

        {/* Line Chart for SMS Subscribers */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              SMS Campaign Subscriber Growth
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={dataLine}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="smsSubscribers" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </Paper>
        </Grid>

        {/* Area Chart for Email Campaign Open/Click Rates */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Email Campaign Open & Click Rates
            </Typography>
            <AreaChart
              width={500}
              height={300}
              data={dataArea}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="openRate" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="clickRate" stackId="1" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
