module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '966147aef08e4ed0e71d85003119c8b0'),
  },
});
