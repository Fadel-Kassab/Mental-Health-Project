import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ArticleCard from './ArticleCard';

const data = [
    {
        "title": "Introduction to Machine Learning",
        "time_to_read": "8 - 10",
        "type": "article",
        "author": "John Doe",
        "rating": 4
    },
    {
        "title": "Deep Learning Fundamentals",
        "time_to_read": "12 - 15",
        "type": "video",
        "author": "Jane Smith",
        "rating": 5
    },
    {
        "title": "Data Structures and Algorithms",
        "time_to_read": "10 - 12",
        "type": "pdf",
        "author": "Alice Johnson",
        "rating": 4
    },
    {
        "title": "The Power of Audio Storytelling",
        "time_to_read": "12 - 15",
        "type": "audio",
        "author": "Bob Brown",
        "rating": 3
    },
    {
        "title": "JavaScript Basics",
        "time_to_read": "8 - 10",
        "type": "article",
        "author": "Emily Wilson",
        "rating": 5
    }
]



const ArticleList = () => {
    return (
        <ScrollView
            style={styles.therapistsList}
            pagingEnabled={true}
            horizontal={true}>
            {
                data.map((article) => {
                    return (
                        <ArticleCard article={article} />
                    )
                })
            }
        </ScrollView>
    );
};

export default ArticleList;

const styles = StyleSheet.create({
    therapistsList: {
        paddingBottom: 10,

    },
});