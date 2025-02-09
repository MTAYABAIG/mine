'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";


export const AboutMe = () => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
    return (
        <Card className="mb-6">
            <CardHeader className="flex flex-row justify-between items-baseline">
                <CardTitle>About Me</CardTitle>
                {isDesktopOrLaptop && <ThemeSwitcher />}
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    With a strong foundation in frontend technologies, I specialize in building seamless, interactive, and user-friendly web applications. My expertise lies in designing intuitive UI/UX experiences that enhance user engagement. As I transition into full-stack development with the MERN stack (MongoDB, Express.js, React, and Node.js), I am expanding my skill set to include backend development, database management, and API integrations. Passionate about writing clean, maintainable code, I continuously explore new tools and frameworks to deliver scalable and high-performance applications            </p>
            </CardContent>
        </Card>
    )
}