// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GadgetInteractRsp.proto" (syntax proto3)
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
import { InterOpType } from "./InterOpType";
import { InteractType } from "./InteractType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 830;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GadgetInteractRsp
 */
export interface GadgetInteractRsp {
    /**
     * @generated from protobuf field: InteractType interact_type = 2;
     */
    interactType: InteractType;
    /**
     * @generated from protobuf field: uint32 gadget_id = 11;
     */
    gadgetId: number;
    /**
     * @generated from protobuf field: int32 retcode = 7;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 gadget_entity_id = 1;
     */
    gadgetEntityId: number;
    /**
     * @generated from protobuf field: InterOpType op_type = 8;
     */
    opType: InterOpType;
}
// @generated message type with reflection information, may provide speed optimized methods
class GadgetInteractRsp$Type extends MessageType<GadgetInteractRsp> {
    constructor() {
        super("GadgetInteractRsp", [
            { no: 2, name: "interact_type", kind: "enum", T: () => ["InteractType", InteractType, "INTERACT_TYPE_"] },
            { no: 11, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "op_type", kind: "enum", T: () => ["InterOpType", InterOpType, "INTER_OP_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<GadgetInteractRsp>): GadgetInteractRsp {
        const message = { interactType: 0, gadgetId: 0, retcode: 0, gadgetEntityId: 0, opType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GadgetInteractRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GadgetInteractRsp): GadgetInteractRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* InteractType interact_type */ 2:
                    message.interactType = reader.int32();
                    break;
                case /* uint32 gadget_id */ 11:
                    message.gadgetId = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 gadget_entity_id */ 1:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* InterOpType op_type */ 8:
                    message.opType = reader.int32();
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
    internalBinaryWrite(message: GadgetInteractRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* InteractType interact_type = 2; */
        if (message.interactType !== 0)
            writer.tag(2, WireType.Varint).int32(message.interactType);
        /* uint32 gadget_id = 11; */
        if (message.gadgetId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.gadgetId);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, WireType.Varint).int32(message.retcode);
        /* uint32 gadget_entity_id = 1; */
        if (message.gadgetEntityId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.gadgetEntityId);
        /* InterOpType op_type = 8; */
        if (message.opType !== 0)
            writer.tag(8, WireType.Varint).int32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetInteractRsp
 */
export const GadgetInteractRsp = new GadgetInteractRsp$Type();
