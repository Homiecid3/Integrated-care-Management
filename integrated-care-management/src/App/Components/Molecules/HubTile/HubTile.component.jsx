import React from 'react'
import { useNavigate } from 'react-router'


// Components
import { Card } from './HubTile.elements'
import Text from '../../Atoms/Text/Text.component'
import { Link } from 'react-router-dom'


export default function HubTile({ label, icon, linkTo }) {
    const navigate = useNavigate()

    return (
        <Card>
            <Link style={{textDecoration: "none"}} to={linkTo}>
                <div className="content">
                    <div className={'icon'}>{icon}</div>
                    <div className="text">
                        <Text type={'span'} color={'#4677B4'} fontSize={'12px'} lineHeight={'14px'} isBold={true}>
                            {label}
                        </Text>
                    </div>
                </div>
            </Link>
        </Card>
    )
}
