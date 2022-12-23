// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SetWidgetSlotRsp.proto" (syntax proto3)
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
import { WidgetSlotOp } from "./WidgetSlotOp";
import { WidgetSlotTag } from "./WidgetSlotTag";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4261;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message SetWidgetSlotRsp
 */
export interface SetWidgetSlotRsp {
    /**
     * @generated from protobuf field: uint32 material_id = 4;
     */
    materialId: number;
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated WidgetSlotTag tag_list = 15;
     */
    tagList: WidgetSlotTag[];
    /**
     * @generated from protobuf field: WidgetSlotOp op = 5;
     */
    op: WidgetSlotOp;
}
// @generated message type with reflection information, may provide speed optimized methods
class SetWidgetSlotRsp$Type extends MessageType<SetWidgetSlotRsp> {
    constructor() {
        super("SetWidgetSlotRsp", [
            { no: 4, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "tag_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["WidgetSlotTag", WidgetSlotTag, "WIDGET_SLOT_TAG_"] },
            { no: 5, name: "op", kind: "enum", T: () => ["WidgetSlotOp", WidgetSlotOp, "WIDGET_SLOT_OP_"] }
        ]);
    }
    create(value?: PartialMessage<SetWidgetSlotRsp>): SetWidgetSlotRsp {
        const message = { materialId: 0, retcode: 0, tagList: [], op: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetWidgetSlotRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetWidgetSlotRsp): SetWidgetSlotRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 material_id */ 4:
                    message.materialId = reader.uint32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated WidgetSlotTag tag_list */ 15:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.int32());
                    else
                        message.tagList.push(reader.int32());
                    break;
                case /* WidgetSlotOp op */ 5:
                    message.op = reader.int32();
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
    internalBinaryWrite(message: SetWidgetSlotRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 material_id = 4; */
        if (message.materialId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.materialId);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, WireType.Varint).int32(message.retcode);
        /* repeated WidgetSlotTag tag_list = 15; */
        if (message.tagList.length) {
            writer.tag(15, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.int32(message.tagList[i]);
            writer.join();
        }
        /* WidgetSlotOp op = 5; */
        if (message.op !== 0)
            writer.tag(5, WireType.Varint).int32(message.op);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetWidgetSlotRsp
 */
export const SetWidgetSlotRsp = new SetWidgetSlotRsp$Type();
