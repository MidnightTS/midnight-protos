// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GadgetCustomTreeInfoNotify.proto" (syntax proto3)
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
 *   CMD_ID = 846;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GadgetCustomTreeInfoNotify
 */
export interface GadgetCustomTreeInfoNotify {
    /**
     * @generated from protobuf field: CustomGadgetTreeInfo custom_gadget_tree_info = 8;
     */
    customGadgetTreeInfo?: CustomGadgetTreeInfo;
    /**
     * @generated from protobuf field: uint32 gadget_entity_id = 7;
     */
    gadgetEntityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GadgetCustomTreeInfoNotify$Type extends MessageType<GadgetCustomTreeInfoNotify> {
    constructor() {
        super("GadgetCustomTreeInfoNotify", [
            { no: 8, name: "custom_gadget_tree_info", kind: "message", T: () => CustomGadgetTreeInfo },
            { no: 7, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GadgetCustomTreeInfoNotify>): GadgetCustomTreeInfoNotify {
        const message = { gadgetEntityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GadgetCustomTreeInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GadgetCustomTreeInfoNotify): GadgetCustomTreeInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* CustomGadgetTreeInfo custom_gadget_tree_info */ 8:
                    message.customGadgetTreeInfo = CustomGadgetTreeInfo.internalBinaryRead(reader, reader.uint32(), options, message.customGadgetTreeInfo);
                    break;
                case /* uint32 gadget_entity_id */ 7:
                    message.gadgetEntityId = reader.uint32();
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
    internalBinaryWrite(message: GadgetCustomTreeInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* CustomGadgetTreeInfo custom_gadget_tree_info = 8; */
        if (message.customGadgetTreeInfo)
            CustomGadgetTreeInfo.internalBinaryWrite(message.customGadgetTreeInfo, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* uint32 gadget_entity_id = 7; */
        if (message.gadgetEntityId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetCustomTreeInfoNotify
 */
export const GadgetCustomTreeInfoNotify = new GadgetCustomTreeInfoNotify$Type();