const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await sequelize.sync({ force: true });
    })

    // Write your tests here
    
    test('Models are defined', () => {
        expect(User).toBeDefined();
        expect(Profile).toBeDefined();
        expect(Post).toBeDefined();
        expect(Comment).toBeDefined();
        expect(Like).toBeDefined();
      });

      test('Associations are correct', () => {
        expect(User.hasOne(Profile)).toBe(true);
        expect(Profile.belongsTo(User)).toBe(true);
    
        expect(User.hasMany(Post)).toBe(true);
        expect(Post.belongsTo(User)).toBe(true);
    
        expect(Post.hasMany(Comment)).toBe(true);
        expect(Comment.belongsTo(Post)).toBe(true);
    
        expect(User.belongsToMany(Post, { through: Like, as: 'LikedPosts' })).toBe(true);
        expect(Post.belongsToMany(User, { through: Like, as: 'LikedByUsers' })).toBe(true);
      });




});