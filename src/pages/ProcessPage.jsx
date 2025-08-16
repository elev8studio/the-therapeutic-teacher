import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Users, TrendingUp, CheckCircle, Clock, MessageCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ProcessPage = () => {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'Introductory Session',
      description: 'We start by scheduling a fun and friendly \'Meet & Greet\' in my therapeutic classroom (HP10). Through interactive games and hands-on challenges, I gently assess your child\'s learning level and style.',
      details: [
        'Fun and friendly \'Meet & Greet\' session',
        'Interactive games and hands-on challenges',
        'Gentle assessment of learning level and style',
        'Connect and build rapport with your child',
        'Decide if we\'re the right fit for each other'
      ],
      duration: '45-60 minutes',
      cost: 'Initial consultation'
    },
    {
      number: 2,
      icon: Users,
      title: 'Small Group Sessions',
      description: 'Your child will be invited to join one of my weekly term-time small groups, with a maximum of four pupils. Each session is carefully tailored to the individual needs of the children.',
      details: [
        'Weekly term-time small groups (maximum 4 pupils)',
        'Sessions tailored to individual needs of children',
        'Nurturing, collaborative learning environment',
        'Builds both confidence and connection',
        'Weekly updates on your child\'s progress'
      ],
      duration: '1-2 hours per session',
      cost: 'Term-time rates'
    },
    {
      number: 3,
      icon: TrendingUp,
      title: 'One-to-One Sessions',
      description: 'Book additional one-to-one sessions during the holidays to target specific learning gaps. These sessions offer enhanced personalised support with tailored instruction.',
      details: [
        'Holiday one-to-one sessions available',
        'Target specific learning gaps and challenges',
        'Enhanced personalised support and instruction',
        'Consolidate foundational concepts',
        'Master more advanced strategies and skills'
      ],
      duration: '1-2 hours per session',
      cost: 'Holiday rates'
    }
  ]

  const whatToExpect = [
    {
      icon: CheckCircle,
      title: 'Personalised Approach',
      description: 'Every child is unique, and their learning plan will be tailored specifically to their needs, interests, and learning style.'
    },
    {
      icon: MessageCircle,
      title: 'Open Communication',
      description: 'Regular updates and open dialogue with parents to ensure everyone is aligned on goals and progress.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Sessions are scheduled to work around your family\'s routine and your child\'s optimal learning times.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium mb-6 badge-text">
              <Sparkles className="w-4 h-4 mr-2" />
              Simple & Straightforward Process
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              How <span className="text-gradient italic">It Works</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Getting started is easy! Here's exactly what happens from your first enquiry 
              to seeing your child flourish in their learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Top Notch Tutoring in <span className="text-primary italic">3 Easy Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A clear, supportive process designed to help your child succeed
            </p>
          </motion.div>
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold">{step.title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6 pt-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {step.cost}
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="hover-lift">
                    <CardContent className="p-8">
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-6">
                        <step.icon className="w-16 h-16 text-primary" />
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">Step {step.number}</div>
                        <h4 className="text-xl font-semibold mb-4">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every step of the journey is designed to be supportive, transparent, and focused on your child's success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-8 text-center">
                    <div className="service-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              I believe children learn best when they're excited, supported, and unafraid to tackle challenges head-on, 
              knowing mistakes fuel their growth.
            </h2>
            <p className="text-lg text-muted-foreground italic">
              This philosophy guides every interaction and shapes the supportive environment I create for each child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about the tutoring process
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: 'How long does each session last?',
                answer: '1:1 sessions are typically 1 hour, small group sessions are 1.5 hours, and home education support can be 2-3 hours depending on needs.'
              },
              {
                question: 'Where do sessions take place?',
                answer: 'All sessions take place in my home-based therapeutic classroom, designed specifically for learning and equipped with all necessary resources.'
              },
              {
                question: 'How often should my child attend?',
                answer: 'Most children benefit from weekly sessions, but we can adjust frequency based on your child\'s needs and your family\'s schedule.'
              },
              {
                question: 'What if my child has special educational needs?',
                answer: 'I have experience supporting children with various learning needs and will adapt my approach to ensure every child can succeed.'
              },
              {
                question: 'How do you track progress?',
                answer: 'I use regular assessments, observations, and feedback to track progress, providing detailed reports and updates to parents.'
              },
              {
                question: 'Can I observe a session?',
                answer: 'While I generally find children learn best without parents present, we can discuss observation opportunities during the consultation.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              The first step is always the hardest, but I'm here to make it as easy as possible. 
              Let's start with a friendly conversation about your child's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="btn-secondary hover:btn-secondary text-lg px-8">
                  Learn About Lucy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default ProcessPage

