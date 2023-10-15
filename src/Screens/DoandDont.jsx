import React from "react";
import style from './DoandDont.css'

function doanddont({ show = false, setOpenSideBase }) {


    return (
        <div >
            <ul>
                <li>
                    <strong>Do's:</strong>
                    <ul>
                        <li>Read the Instructions: Always read and follow the manufacturer's instructions on each firework. This ensures proper usage and safety.</li>
                        <li>Designate a Shooter: Assign one responsible person to handle the fireworks. They should be sober, focused, and familiar with the fireworks.</li>
                        <li>Keep Water Nearby: Have a bucket of water or a hose nearby in case of emergencies.</li>
                        <li>Keep a Safe Distance: Maintain a safe distance from lit fireworks. Follow the recommended distance specified by the manufacturer.</li>
                        <li>Use a Flat Surface: Set up fireworks on a flat, stable surface, away from flammable materials.</li>
                        <li>Dispose of Properly: After the firework has burned, properly dispose of the debris in a metal container filled with water.</li>
                    </ul>
                </li>
                <li>
                    <strong>Don'ts:</strong>
                    <ul>
                        <li>Don't Drink and Handle Fireworks: Avoid alcohol or any substances that impair judgment when handling fireworks.</li>
                        <li>Don't Relight 'Duds': If a firework fails to ignite, wait at least 20 minutes before approaching it. Then, soak it in water.</li>
                        <li>Don't Aim at People or Animals: Never point fireworks at people, animals, or buildings.</li>
                        <li>Don't Use Illegal Fireworks: Stick to legal fireworks purchased from reputable sources. Illegal fireworks can be extremely dangerous.</li>
                        <li>Don't Use Near Dry Grass or Trees: Avoid using fireworks near dry grass or flammable objects. Opt for a clear, open area.</li>
                        <li>Don't Carry Fireworks in Your Pocket: Keep fireworks in a secure, cool, and dry place until you're ready to use them.</li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}

export default doanddont;
