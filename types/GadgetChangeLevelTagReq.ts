// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GadgetChangeLevelTagReq.proto" (syntax proto3)
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
import { CustomGadgetTreeInfo } from "./CustomGadgetTreeInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 875;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message GadgetChangeLevelTagReq
 */
export interface GadgetChangeLevelTagReq {
    /**
     * @generated from protobuf field: uint32 gadget_entity_id = 14;
     */
    gadgetEntityId: number;
    /**
     * @generated from protobuf field: uint32 level_tag_id = 6;
     */
    levelTagId: number;
    /**
     * @generated from protobuf field: CustomGadgetTreeInfo combination_info = 7;
     */
    combinationInfo?: CustomGadgetTreeInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class GadgetChangeLevelTagReq$Type extends MessageType<GadgetChangeLevelTagReq> {
    constructor() {
        super("GadgetChangeLevelTagReq", [
            { no: 14, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "level_tag_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "combination_info", kind: "message", T: () => CustomGadgetTreeInfo }
        ]);
    }
    create(value?: PartialMessage<GadgetChangeLevelTagReq>): GadgetChangeLevelTagReq {
        const message = { gadgetEntityId: 0, levelTagId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GadgetChangeLevelTagReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GadgetChangeLevelTagReq): GadgetChangeLevelTagReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 gadget_entity_id */ 14:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 level_tag_id */ 6:
                    message.levelTagId = reader.uint32();
                    break;
                case /* CustomGadgetTreeInfo combination_info */ 7:
                    message.combinationInfo = CustomGadgetTreeInfo.internalBinaryRead(reader, reader.uint32(), options, message.combinationInfo);
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
    internalBinaryWrite(message: GadgetChangeLevelTagReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 gadget_entity_id = 14; */
        if (message.gadgetEntityId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 level_tag_id = 6; */
        if (message.levelTagId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.levelTagId);
        /* CustomGadgetTreeInfo combination_info = 7; */
        if (message.combinationInfo)
            CustomGadgetTreeInfo.internalBinaryWrite(message.combinationInfo, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetChangeLevelTagReq
 */
export const GadgetChangeLevelTagReq = new GadgetChangeLevelTagReq$Type();