// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TryEnterHomeRsp.proto" (syntax proto3)
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
 *   CMD_ID = 4796;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message TryEnterHomeRsp
 */
export interface TryEnterHomeRsp {
    /**
     * @generated from protobuf field: repeated uint32 param_list = 11;
     */
    paramList: number[];
    /**
     * @generated from protobuf field: uint32 target_uid = 2;
     */
    targetUid: number;
    /**
     * @generated from protobuf field: int32 retcode = 4;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TryEnterHomeRsp$Type extends MessageType<TryEnterHomeRsp> {
    constructor() {
        super("TryEnterHomeRsp", [
            { no: 11, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<TryEnterHomeRsp>): TryEnterHomeRsp {
        const message = { paramList: [], targetUid: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TryEnterHomeRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TryEnterHomeRsp): TryEnterHomeRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 param_list */ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* uint32 target_uid */ 2:
                    message.targetUid = reader.uint32();
                    break;
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
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
    internalBinaryWrite(message: TryEnterHomeRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 param_list = 11; */
        if (message.paramList.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* uint32 target_uid = 2; */
        if (message.targetUid !== 0)
            writer.tag(2, WireType.Varint).uint32(message.targetUid);
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TryEnterHomeRsp
 */
export const TryEnterHomeRsp = new TryEnterHomeRsp$Type();
