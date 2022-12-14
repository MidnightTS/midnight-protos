// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RechargeReq.proto" (syntax proto3)
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
import { ShopConcertProduct } from "./ShopConcertProduct";
import { PlayProduct } from "./PlayProduct";
import { ShopCardProduct } from "./ShopCardProduct";
import { ShopMcoinProduct } from "./ShopMcoinProduct";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4142;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message RechargeReq
 */
export interface RechargeReq {
    /**
     * @generated from protobuf field: ShopMcoinProduct mcoin_product = 10;
     */
    mcoinProduct?: ShopMcoinProduct;
    /**
     * @generated from protobuf field: ShopCardProduct card_product = 4;
     */
    cardProduct?: ShopCardProduct;
    /**
     * @generated from protobuf field: PlayProduct play_product = 3;
     */
    playProduct?: PlayProduct;
    /**
     * @generated from protobuf field: ShopConcertProduct concert_product = 11;
     */
    concertProduct?: ShopConcertProduct;
}
// @generated message type with reflection information, may provide speed optimized methods
class RechargeReq$Type extends MessageType<RechargeReq> {
    constructor() {
        super("RechargeReq", [
            { no: 10, name: "mcoin_product", kind: "message", T: () => ShopMcoinProduct },
            { no: 4, name: "card_product", kind: "message", T: () => ShopCardProduct },
            { no: 3, name: "play_product", kind: "message", T: () => PlayProduct },
            { no: 11, name: "concert_product", kind: "message", T: () => ShopConcertProduct }
        ]);
    }
    create(value?: PartialMessage<RechargeReq>): RechargeReq {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RechargeReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RechargeReq): RechargeReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ShopMcoinProduct mcoin_product */ 10:
                    message.mcoinProduct = ShopMcoinProduct.internalBinaryRead(reader, reader.uint32(), options, message.mcoinProduct);
                    break;
                case /* ShopCardProduct card_product */ 4:
                    message.cardProduct = ShopCardProduct.internalBinaryRead(reader, reader.uint32(), options, message.cardProduct);
                    break;
                case /* PlayProduct play_product */ 3:
                    message.playProduct = PlayProduct.internalBinaryRead(reader, reader.uint32(), options, message.playProduct);
                    break;
                case /* ShopConcertProduct concert_product */ 11:
                    message.concertProduct = ShopConcertProduct.internalBinaryRead(reader, reader.uint32(), options, message.concertProduct);
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
    internalBinaryWrite(message: RechargeReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ShopMcoinProduct mcoin_product = 10; */
        if (message.mcoinProduct)
            ShopMcoinProduct.internalBinaryWrite(message.mcoinProduct, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* ShopCardProduct card_product = 4; */
        if (message.cardProduct)
            ShopCardProduct.internalBinaryWrite(message.cardProduct, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* PlayProduct play_product = 3; */
        if (message.playProduct)
            PlayProduct.internalBinaryWrite(message.playProduct, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* ShopConcertProduct concert_product = 11; */
        if (message.concertProduct)
            ShopConcertProduct.internalBinaryWrite(message.concertProduct, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RechargeReq
 */
export const RechargeReq = new RechargeReq$Type();
