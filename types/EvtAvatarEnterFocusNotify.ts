// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EvtAvatarEnterFocusNotify.proto" (syntax proto3)
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
import { Vector } from "./Vector";
import { ForwardType } from "./ForwardType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 344;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message EvtAvatarEnterFocusNotify
 */
export interface EvtAvatarEnterFocusNotify {
    /**
     * @generated from protobuf field: ForwardType forward_type = 14;
     */
    forwardType: ForwardType;
    /**
     * @generated from protobuf field: bool Unk3300_NPBLDGPCDOC = 15 [json_name = "Unk3300NPBLDGPCDOC"];
     */
    unk3300NPBLDGPCDOC: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_IJHHDFDIJMA = 4 [json_name = "Unk3300IJHHDFDIJMA"];
     */
    unk3300IJHHDFDIJMA: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_NALGJBLGNJI = 13 [json_name = "Unk3300NALGJBLGNJI"];
     */
    unk3300NALGJBLGNJI: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_OOOPPHEJKDI = 2 [json_name = "Unk3300OOOPPHEJKDI"];
     */
    unk3300OOOPPHEJKDI: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_KMAFBMKJDAK = 9 [json_name = "Unk3300KMAFBMKJDAK"];
     */
    unk3300KMAFBMKJDAK: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_LNLOOKDHJGF = 8 [json_name = "Unk3300LNLOOKDHJGF"];
     */
    unk3300LNLOOKDHJGF: boolean;
    /**
     * @generated from protobuf field: uint32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from protobuf field: bool Unk3300_GGHCEGJEHND = 11 [json_name = "Unk3300GGHCEGJEHND"];
     */
    unk3300GGHCEGJEHND: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_NLNIBJAFADG = 7 [json_name = "Unk3300NLNIBJAFADG"];
     */
    unk3300NLNIBJAFADG: boolean;
    /**
     * @generated from protobuf field: Vector focus_forward = 3;
     */
    focusForward?: Vector;
    /**
     * @generated from protobuf field: bool Unk3300_CDAJJHIPIKH = 12 [json_name = "Unk3300CDAJJHIPIKH"];
     */
    unk3300CDAJJHIPIKH: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_FHHDDNENEDD = 6 [json_name = "Unk3300FHHDDNENEDD"];
     */
    unk3300FHHDDNENEDD: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarEnterFocusNotify$Type extends MessageType<EvtAvatarEnterFocusNotify> {
    constructor() {
        super("EvtAvatarEnterFocusNotify", [
            { no: 14, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType, "FORWARD_TYPE_"] },
            { no: 15, name: "Unk3300_NPBLDGPCDOC", kind: "scalar", jsonName: "Unk3300NPBLDGPCDOC", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_IJHHDFDIJMA", kind: "scalar", jsonName: "Unk3300IJHHDFDIJMA", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "Unk3300_NALGJBLGNJI", kind: "scalar", jsonName: "Unk3300NALGJBLGNJI", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "Unk3300_OOOPPHEJKDI", kind: "scalar", jsonName: "Unk3300OOOPPHEJKDI", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_KMAFBMKJDAK", kind: "scalar", jsonName: "Unk3300KMAFBMKJDAK", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_LNLOOKDHJGF", kind: "scalar", jsonName: "Unk3300LNLOOKDHJGF", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_GGHCEGJEHND", kind: "scalar", jsonName: "Unk3300GGHCEGJEHND", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "Unk3300_NLNIBJAFADG", kind: "scalar", jsonName: "Unk3300NLNIBJAFADG", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "focus_forward", kind: "message", T: () => Vector },
            { no: 12, name: "Unk3300_CDAJJHIPIKH", kind: "scalar", jsonName: "Unk3300CDAJJHIPIKH", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "Unk3300_FHHDDNENEDD", kind: "scalar", jsonName: "Unk3300FHHDDNENEDD", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<EvtAvatarEnterFocusNotify>): EvtAvatarEnterFocusNotify {
        const message = { forwardType: 0, unk3300NPBLDGPCDOC: false, unk3300IJHHDFDIJMA: false, unk3300NALGJBLGNJI: false, unk3300OOOPPHEJKDI: false, unk3300KMAFBMKJDAK: false, unk3300LNLOOKDHJGF: false, entityId: 0, unk3300GGHCEGJEHND: false, unk3300NLNIBJAFADG: false, unk3300CDAJJHIPIKH: false, unk3300FHHDDNENEDD: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EvtAvatarEnterFocusNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvtAvatarEnterFocusNotify): EvtAvatarEnterFocusNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ForwardType forward_type */ 14:
                    message.forwardType = reader.int32();
                    break;
                case /* bool Unk3300_NPBLDGPCDOC = 15 [json_name = "Unk3300NPBLDGPCDOC"];*/ 15:
                    message.unk3300NPBLDGPCDOC = reader.bool();
                    break;
                case /* bool Unk3300_IJHHDFDIJMA = 4 [json_name = "Unk3300IJHHDFDIJMA"];*/ 4:
                    message.unk3300IJHHDFDIJMA = reader.bool();
                    break;
                case /* bool Unk3300_NALGJBLGNJI = 13 [json_name = "Unk3300NALGJBLGNJI"];*/ 13:
                    message.unk3300NALGJBLGNJI = reader.bool();
                    break;
                case /* bool Unk3300_OOOPPHEJKDI = 2 [json_name = "Unk3300OOOPPHEJKDI"];*/ 2:
                    message.unk3300OOOPPHEJKDI = reader.bool();
                    break;
                case /* bool Unk3300_KMAFBMKJDAK = 9 [json_name = "Unk3300KMAFBMKJDAK"];*/ 9:
                    message.unk3300KMAFBMKJDAK = reader.bool();
                    break;
                case /* bool Unk3300_LNLOOKDHJGF = 8 [json_name = "Unk3300LNLOOKDHJGF"];*/ 8:
                    message.unk3300LNLOOKDHJGF = reader.bool();
                    break;
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* bool Unk3300_GGHCEGJEHND = 11 [json_name = "Unk3300GGHCEGJEHND"];*/ 11:
                    message.unk3300GGHCEGJEHND = reader.bool();
                    break;
                case /* bool Unk3300_NLNIBJAFADG = 7 [json_name = "Unk3300NLNIBJAFADG"];*/ 7:
                    message.unk3300NLNIBJAFADG = reader.bool();
                    break;
                case /* Vector focus_forward */ 3:
                    message.focusForward = Vector.internalBinaryRead(reader, reader.uint32(), options, message.focusForward);
                    break;
                case /* bool Unk3300_CDAJJHIPIKH = 12 [json_name = "Unk3300CDAJJHIPIKH"];*/ 12:
                    message.unk3300CDAJJHIPIKH = reader.bool();
                    break;
                case /* bool Unk3300_FHHDDNENEDD = 6 [json_name = "Unk3300FHHDDNENEDD"];*/ 6:
                    message.unk3300FHHDDNENEDD = reader.bool();
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
    internalBinaryWrite(message: EvtAvatarEnterFocusNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ForwardType forward_type = 14; */
        if (message.forwardType !== 0)
            writer.tag(14, WireType.Varint).int32(message.forwardType);
        /* bool Unk3300_NPBLDGPCDOC = 15 [json_name = "Unk3300NPBLDGPCDOC"]; */
        if (message.unk3300NPBLDGPCDOC !== false)
            writer.tag(15, WireType.Varint).bool(message.unk3300NPBLDGPCDOC);
        /* bool Unk3300_IJHHDFDIJMA = 4 [json_name = "Unk3300IJHHDFDIJMA"]; */
        if (message.unk3300IJHHDFDIJMA !== false)
            writer.tag(4, WireType.Varint).bool(message.unk3300IJHHDFDIJMA);
        /* bool Unk3300_NALGJBLGNJI = 13 [json_name = "Unk3300NALGJBLGNJI"]; */
        if (message.unk3300NALGJBLGNJI !== false)
            writer.tag(13, WireType.Varint).bool(message.unk3300NALGJBLGNJI);
        /* bool Unk3300_OOOPPHEJKDI = 2 [json_name = "Unk3300OOOPPHEJKDI"]; */
        if (message.unk3300OOOPPHEJKDI !== false)
            writer.tag(2, WireType.Varint).bool(message.unk3300OOOPPHEJKDI);
        /* bool Unk3300_KMAFBMKJDAK = 9 [json_name = "Unk3300KMAFBMKJDAK"]; */
        if (message.unk3300KMAFBMKJDAK !== false)
            writer.tag(9, WireType.Varint).bool(message.unk3300KMAFBMKJDAK);
        /* bool Unk3300_LNLOOKDHJGF = 8 [json_name = "Unk3300LNLOOKDHJGF"]; */
        if (message.unk3300LNLOOKDHJGF !== false)
            writer.tag(8, WireType.Varint).bool(message.unk3300LNLOOKDHJGF);
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.entityId);
        /* bool Unk3300_GGHCEGJEHND = 11 [json_name = "Unk3300GGHCEGJEHND"]; */
        if (message.unk3300GGHCEGJEHND !== false)
            writer.tag(11, WireType.Varint).bool(message.unk3300GGHCEGJEHND);
        /* bool Unk3300_NLNIBJAFADG = 7 [json_name = "Unk3300NLNIBJAFADG"]; */
        if (message.unk3300NLNIBJAFADG !== false)
            writer.tag(7, WireType.Varint).bool(message.unk3300NLNIBJAFADG);
        /* Vector focus_forward = 3; */
        if (message.focusForward)
            Vector.internalBinaryWrite(message.focusForward, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_CDAJJHIPIKH = 12 [json_name = "Unk3300CDAJJHIPIKH"]; */
        if (message.unk3300CDAJJHIPIKH !== false)
            writer.tag(12, WireType.Varint).bool(message.unk3300CDAJJHIPIKH);
        /* bool Unk3300_FHHDDNENEDD = 6 [json_name = "Unk3300FHHDDNENEDD"]; */
        if (message.unk3300FHHDDNENEDD !== false)
            writer.tag(6, WireType.Varint).bool(message.unk3300FHHDDNENEDD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAvatarEnterFocusNotify
 */
export const EvtAvatarEnterFocusNotify = new EvtAvatarEnterFocusNotify$Type();