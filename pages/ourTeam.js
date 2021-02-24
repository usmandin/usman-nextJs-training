import Layout from '../components/layout/layout'
import Intro from '../components/intro/intro'
import Container from '../components/container/container'
import Team from '../components/team/team'

export default function Document() {
    const teamSmallArray = [
        {
            variant : "teamsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"false",
            userImage : "/asstes/profilePhoto01.jpg",
            socialMedia:"",
        },
        {
            variant : "teamsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto02.jpg",
            socialMedia:""
        },
        {
            variant : "teamsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto03.jpg",
            socialMedia:""
        },
        {
            variant : "teamsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto04.jpg",
            socialMedia:""
        },
        {
            variant : "teamsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:""
        },
        {
            variant : "teamsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:""
        }
    ];

    const teamLargeArray = [
        {
            variant : "teamlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userImage : "/asstes/profilePhoto01.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto02.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto03.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto04.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        }
    ];

    const teamGridSmallArray = [
        {
            variant : "teamgridsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"false",
            userImage : "/asstes/profilePhoto01.jpg",
            socialMedia:"",
        },
        {
            variant : "teamgridsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto02.jpg",
            socialMedia:""
        },
        {
            variant : "teamgridsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto03.jpg",
            socialMedia:""
        },
        {
            variant : "teamgridsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto04.jpg",
            socialMedia:""
        },
        {
            variant : "teamgridsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:""
        },
        {
            variant : "teamgridsmall",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "senior ui developer",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:""
        }
    ];

    const teamLargeDarkArray = [
        {
            variant : "teamdark",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto01.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamdark",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto02.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamdark",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto03.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamdark",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto04.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamdark",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamdark",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        }
    ];

    const teamGridLargeArray = [
        {
            variant : "gridlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto01.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "gridlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto02.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "gridlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto03.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "gridlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto04.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "gridlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "gridlarge",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"",
            userImage : "/asstes/profilePhoto05.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        }
    ];
    const teamGridDescArray = [
        {
            variant : "teamwithdescription",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"true",
            userImage : "/asstes/profilePhoto01.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "teamwithdescription",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"true",
            userImage : "/asstes/profilePhoto02.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        }
    ];
    const teamVerticalArray = [
        {
            variant : "gridFullWith",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"true",
            userImage : "/asstes/profilePhoto01.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        },
        {
            variant : "gridFullWith",
            userName : "salman ali",
            userDesignation : "senior ui developer",
            userDiscription : "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            userDiscriptionCheck:"true",
            userImage : "/asstes/profilePhoto02.jpg",
            socialMedia:[{ mediaName: "facebook", mediaLink: ""} , {mediaName: "twitter", mediaLink: "" } , {mediaName: "linkdin", mediaLink: "" }]
        }
    ];

    return (
        <Layout title="Our Team">
            <Intro> Our Team </Intro>
            
            <Container grid={"3"}>
            {
                teamSmallArray.map(function (data, i) {
                    return <Team 
                            variant={data.variant}
                            userName={data.userName}
                            userDesignation={data.userDesignation}
                            userDiscription={data.userDiscription}
                            userImage={data.userImage}
                            socialMedia={data.socialMedia}
                            />
                })
            }
            </Container>

            <Container grid={"6"}>
            {
                teamGridSmallArray.map(function (data, i) {
                    return <Team 
                            variant={data.variant}
                            userName={data.userName}
                            userDesignation={data.userDesignation}
                            userDiscription={data.userDiscription}
                            userImage={data.userImage}
                            socialMedia={data.socialMedia}
                            />
                })
            }
            </Container>

            <Container grid={"3"}>
            {
                teamLargeArray.map(function (data, i) {
                    return <Team 
                            variant={data.variant}
                            userName={data.userName}
                            userDesignation={data.userDesignation}
                            userDiscription={data.userDiscription}
                            userImage={data.userImage}
                            socialMedia={data.socialMedia}
                            />
                })
            }
            </Container>

            <Container grid={"3"}>
            {
                teamLargeDarkArray.map(function (data, i) {
                    return <Team 
                            variant={data.variant}
                            userName={data.userName}
                            userDesignation={data.userDesignation}
                            userDiscription={data.userDiscription}
                            userDiscriptionCheck={data.userDiscriptionCheck}
                            userImage={data.userImage}
                            socialMedia={data.socialMedia}
                            />
                })
            }
            </Container>

            <Container grid={"2"}>
            {
                teamGridDescArray.map(function (data, i) {
                    return <Team 
                            variant={data.variant}
                            userName={data.userName}
                            userDesignation={data.userDesignation}
                            userDiscription={data.userDiscription}
                            userDiscriptionCheck={data.userDiscriptionCheck}
                            userImage={data.userImage}
                            socialMedia={data.socialMedia}
                            />
                })
            }
            </Container>
            
            <Container grid={"1"}>
            {
                teamVerticalArray.map(function (data, i) {
                    return <Team 
                            variant={data.variant}
                            userName={data.userName}
                            userDesignation={data.userDesignation}
                            userDiscription={data.userDiscription}
                            userDiscriptionCheck={data.userDiscriptionCheck}
                            userImage={data.userImage}
                            socialMedia={data.socialMedia}
                            />
                })
            }
            </Container>
            
            <Container grid={"3"}>
            {
                teamGridLargeArray.map(function (data, i) {
                    return <Team 
                            variant={data.variant}
                            userName={data.userName}
                            userDesignation={data.userDesignation}
                            userDiscription={data.userDiscription}
                            userDiscriptionCheck={data.userDiscriptionCheck}
                            userImage={data.userImage}
                            socialMedia={data.socialMedia}
                            />
                })
            }
            </Container>      
        </Layout>
    )
}