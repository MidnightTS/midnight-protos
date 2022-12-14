// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MsgParam.proto" (syntax proto3)
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
 * @generated from protobuf message MsgParam
 */
export interface MsgParam {
    /**
     * @generated from protobuf oneof: param
     */
    param: {
        oneofKind: "intParam";
        /**
         * @generated from protobuf field: uint32 int_param = 13;
         */
        intParam: number;
    } | {
        oneofKind: "fltParam";
        /**
         * @generated from protobuf field: float flt_param = 14;
         */
        fltParam: number;
    } | {
        oneofKind: "strParam";
        /**
         * @generated from protobuf field: string str_param = 4;
         */
        strParam: string;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class MsgParam$Type extends MessageType<MsgParam> {
    constructor() {
        super("MsgParam", [
            { no: 13, name: "int_param", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "flt_param", kind: "scalar", oneof: "param", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "str_param", kind: "scalar", oneof: "param", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<MsgParam>): MsgParam {
        const message = { param: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgParam>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgParam): MsgParam {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 int_param */ 13:
                    message.param = {
                        oneofKind: "intParam",
                        intParam: reader.uint32()
                    };
                    break;
                case /* float flt_param */ 14:
                    message.param = {
                        oneofKind: "fltParam",
                        fltParam: reader.float()
                    };
                    break;
                case /* string str_param */ 4:
                    message.param = {
                        oneofKind: "strParam",
                        strParam: reader.string()
                    };
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
    internalBinaryWrite(message: MsgParam, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 int_param = 13; */
        if (message.param.oneofKind === "intParam")
            writer.tag(13, WireType.Varint).uint32(message.param.intParam);
        /* float flt_param = 14; */
        if (message.param.oneofKind === "fltParam")
            writer.tag(14, WireType.Bit32).float(message.param.fltParam);
        /* string str_param = 4; */
        if (message.param.oneofKind === "strParam")
            writer.tag(4, WireType.LengthDelimited).string(message.param.strParam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MsgParam
 */
export const MsgParam = new MsgParam$Type();
