// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "VintageMarketStoreViewStrategyReq.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 21834;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message VintageMarketStoreViewStrategyReq
 */
export interface VintageMarketStoreViewStrategyReq {
    /**
     * @generated from protobuf field: uint32 strategy_id = 9;
     */
    strategyId: number;
    /**
     * @generated from protobuf field: repeated uint32 strategy_list = 1;
     */
    strategyList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketStoreViewStrategyReq$Type extends MessageType<VintageMarketStoreViewStrategyReq> {
    constructor() {
        super("VintageMarketStoreViewStrategyReq", [
            { no: 9, name: "strategy_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "strategy_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<VintageMarketStoreViewStrategyReq>): VintageMarketStoreViewStrategyReq {
        const message = { strategyId: 0, strategyList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VintageMarketStoreViewStrategyReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VintageMarketStoreViewStrategyReq): VintageMarketStoreViewStrategyReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 strategy_id */ 9:
                    message.strategyId = reader.uint32();
                    break;
                case /* repeated uint32 strategy_list */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.strategyList.push(reader.uint32());
                    else
                        message.strategyList.push(reader.uint32());
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
    internalBinaryWrite(message: VintageMarketStoreViewStrategyReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 strategy_id = 9; */
        if (message.strategyId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.strategyId);
        /* repeated uint32 strategy_list = 1; */
        if (message.strategyList.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.strategyList.length; i++)
                writer.uint32(message.strategyList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketStoreViewStrategyReq
 */
export const VintageMarketStoreViewStrategyReq = new VintageMarketStoreViewStrategyReq$Type();
