// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ProductPriceTier.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message ProductPriceTier
 */
export interface ProductPriceTier {
    /**
     * @generated from protobuf field: string price_tier = 3;
     */
    priceTier: string;
    /**
     * @generated from protobuf field: string product_id = 14;
     */
    productId: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ProductPriceTier$Type extends MessageType<ProductPriceTier> {
    constructor() {
        super("ProductPriceTier", [
            { no: 3, name: "price_tier", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ProductPriceTier>): ProductPriceTier {
        const message = { priceTier: "", productId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProductPriceTier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductPriceTier): ProductPriceTier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string price_tier */ 3:
                    message.priceTier = reader.string();
                    break;
                case /* string product_id */ 14:
                    message.productId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProductPriceTier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string price_tier = 3; */
        if (message.priceTier !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.priceTier);
        /* string product_id = 14; */
        if (message.productId !== "")
            writer.tag(14, WireType.LengthDelimited).string(message.productId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ProductPriceTier
 */
export const ProductPriceTier = new ProductPriceTier$Type();
