import * as React from "react";

import './masonry.styles.scss';

import MasonryItem from '../masonry-item/masonry-item.component';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

const CustomMasonry = (props) => {
    const { items } = props;

    return (
        <div>
            <div className="ontario-row">
                <div className="ontario-columns">

                    <Box sx={{ minHeight: 253 }}>
                        <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={2}>
                            {
                                items.map((item, index) => (
                                    <MasonryItem key={index} item={item} />
                                ))
                            }
                        </Masonry>
                    </Box>

                </div>
            </div>

        </div>
    );
}

export default CustomMasonry;