import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    enquiryType: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // For Formspree integration, we'll let the form submit naturally
    // but show a success message after a short delay
    const form = e.target
    const formData = new FormData(form)
    
    try {
      // Submit to Formspree
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          childAge: '',
          enquiryType: '',
          message: ''
        })
        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again or contact me directly.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+44 7850 989629',
      description: 'Call or text for quick questions'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'thetherapeuticteacher.uk@gmail.com',
      description: 'Detailed enquiries welcome'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Home-based Therapeutic Classroom',
      description: 'Safe, welcoming learning environment'
    },
    {
      icon: Clock,
      title: 'Availability',
      details: 'Monday - Friday',
      description: 'Flexible scheduling available'
    }
  ]

  const faqs = [
    {
      question: 'How quickly can we start?',
      answer: 'After our initial consultation, we can usually start sessions within 1-2 weeks, depending on availability.'
    },
    {
      question: 'What should my child bring?',
      answer: 'Just themselves! I provide all necessary materials, books, and resources for the sessions.'
    },
    {
      question: 'Do you offer online sessions?',
      answer: 'I focus on in-person sessions in my therapeutic classroom for the best learning experience.'
    },
    {
      question: 'What are your rates?',
      answer: 'Rates vary by service type. I\'ll discuss pricing during our initial consultation based on your needs.'
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
              Let's Start the Conversation
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-gradient italic">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to help your child flourish? I'd love to hear about their learning journey 
              and discuss how I can support their growth and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Free Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours to arrange 
                    our initial meeting.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        I'll be in touch within 24 hours to arrange our consultation.
                      </p>
                    </motion.div>
                  ) : (
                    <form action="https://formspree.io/f/xvgqynnz" method="POST" onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Parent/Guardian Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="childAge">Child's Age/Year Group</Label>
                          <Input
                            id="childAge"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            placeholder="e.g. Year 3, Age 7"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="enquiryType">Type of Enquiry</Label>
                        <select
                          id="enquiryType"
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="">Please select...</option>
                          <option value="1:1 Tutoring">1:1 Tutoring</option>
                          <option value="Small Group Sessions">Small Group Sessions</option>
                          <option value="Home Education Support">Home Education Support</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Tell me about your child's needs</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="What areas would you like support with? Any specific challenges or goals?"
                          className="mt-1"
                        />
                      </div>
                      
                      <Button type="submit" className="btn-primary w-full text-lg">
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        * Required fields. I'll respond within 24 hours.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm here to answer any questions you have about tutoring services. 
                  Don't hesitate to reach out!
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="service-icon w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-foreground mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Quick Response Promise</h3>
                  <p className="text-muted-foreground">
                    I understand that finding the right support for your child is important. 
                    I aim to respond to all enquiries within 24 hours, and often much sooner!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
              Quick Questions & Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about getting started
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
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

      {/* Next Steps */}
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
              What Happens Next?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: 1,
                  title: 'You Contact Me',
                  description: 'Fill out the form or give me a call to discuss your child\'s needs'
                },
                {
                  step: 2,
                  title: 'Free Consultation',
                  description: 'I visit you at home for a friendly chat and light assessment'
                },
                {
                  step: 3,
                  title: 'Start Learning',
                  description: 'Begin sessions in my therapeutic classroom and watch your child flourish'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="text-lg text-muted-foreground italic">
              "The first step is always the hardest, but I'm here to make it as easy as possible for you and your child."
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactPage

