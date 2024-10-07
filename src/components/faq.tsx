import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQ() {
    return (
        <div className="flex  flex-col  mx-[30%]">

         <h1 className="text-3xl  p-4  text-black ">FAQs</h1>
      <Accordion type="single" collapsible className="w-full text-black">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the currency in Ethiopia?
          </AccordionTrigger>
          <AccordionContent>
          The Ethiopian currency is Birr. Changing money is  straightforward in cities and bigger towns.
             Although credit cards are accepted in large hotels and lodges, restaurants and shops, you might need cash for smaller establishments and on the roads less travelled.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> What language is spoken in Ethiopia?</AccordionTrigger>
          <AccordionContent>
          Ethiopia&apos;s official language is Amharic. English is widely spoken but a few words of Amharic can make you new friends.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it Save to Travel around Regional State?</AccordionTrigger>
          <AccordionContent>
            Yes. Currently only some parts of amhara region are not safe to travel beside that it&apos;s perfectly fine and much fun to travel different ethiopian region.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  