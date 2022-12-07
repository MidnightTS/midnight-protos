// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "VintageMarketNpcEventFinishNotify.proto" (syntax proto3)
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
 *   CMD_ID = 24781;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message VintageMarketNpcEventFinishNotify
 */
export interface VintageMarketNpcEventFinishNotify {
    /**
     * @generated from protobuf field: uint32 coin_a = 3;
     */
    coinA: number;
    /**
     * @generated from protobuf field: uint32 coin_c = 9;
     */
    coinC: number;
    /**
     * @generated from protobuf field: repeated uint32 unlock_strategy_list = 12;
     */
    unlockStrategyList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketNpcEventFinishNotify$Type extends MessageType<VintageMarketNpcEventFinishNotify> {
    constructor() {
        super("VintageMarketNpcEventFinishNotify", [
            { no: 3, name: "coin_a", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "coin_c", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "unlock_strategy_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<VintageMarketNpcEventFinishNotify>): VintageMarketNpcEventFinishNotify {
        const message = { coinA: 0, coinC: 0, unlockStrategyList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VintageMarketNpcEventFinishNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VintageMarketNpcEventFinishNotify): VintageMarketNpcEventFinishNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 coin_a */ 3:
                    message.coinA = reader.uint32();
                    break;
                case /* uint32 coin_c */ 9:
                    message.coinC = reader.uint32();
                    break;
                case /* repeated uint32 unlock_strategy_list */ 12:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockStrategyList.push(reader.uint32());
                    else
                        message.unlockStrategyList.push(reader.uint32());
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
    internalBinaryWrite(message: VintageMarketNpcEventFinishNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 coin_a = 3; */
        if (message.coinA !== 0)
            writer.tag(3, WireType.Varint).uint32(message.coinA);
        /* uint32 coin_c = 9; */
        if (message.coinC !== 0)
            writer.tag(9, WireType.Varint).uint32(message.coinC);
        /* repeated uint32 unlock_strategy_list = 12; */
        if (message.unlockStrategyList.length) {
            writer.tag(12, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockStrategyList.length; i++)
                writer.uint32(message.unlockStrategyList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketNpcEventFinishNotify
 */
export const VintageMarketNpcEventFinishNotify = new VintageMarketNpcEventFinishNotify$Type();