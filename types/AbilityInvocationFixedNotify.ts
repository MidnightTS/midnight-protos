// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AbilityInvocationFixedNotify.proto" (syntax proto3)
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
import { AbilityInvokeEntry } from "./AbilityInvokeEntry";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1179;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message AbilityInvocationFixedNotify
 */
export interface AbilityInvocationFixedNotify {
    /**
     * @generated from protobuf field: AbilityInvokeEntry Unk3300_LDIAOMFIBPL = 7 [json_name = "Unk3300LDIAOMFIBPL"];
     */
    unk3300LDIAOMFIBPL?: AbilityInvokeEntry;
    /**
     * @generated from protobuf field: AbilityInvokeEntry Unk3300_ONGNOHLIIBO = 3 [json_name = "Unk3300ONGNOHLIIBO"];
     */
    unk3300ONGNOHLIIBO?: AbilityInvokeEntry;
    /**
     * @generated from protobuf field: AbilityInvokeEntry Unk3300_AHDFHHFHEFM = 10 [json_name = "Unk3300AHDFHHFHEFM"];
     */
    unk3300AHDFHHFHEFM?: AbilityInvokeEntry;
    /**
     * @generated from protobuf field: AbilityInvokeEntry Unk3300_GAFFBFFKDIC = 1 [json_name = "Unk3300GAFFBFFKDIC"];
     */
    unk3300GAFFBFFKDIC?: AbilityInvokeEntry;
    /**
     * @generated from protobuf field: AbilityInvokeEntry Unk3300_EMGKKHKLIEG = 4 [json_name = "Unk3300EMGKKHKLIEG"];
     */
    unk3300EMGKKHKLIEG?: AbilityInvokeEntry;
    /**
     * @generated from protobuf field: AbilityInvokeEntry Unk3300_KFMHLLHECCJ = 9 [json_name = "Unk3300KFMHLLHECCJ"];
     */
    unk3300KFMHLLHECCJ?: AbilityInvokeEntry;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvocationFixedNotify$Type extends MessageType<AbilityInvocationFixedNotify> {
    constructor() {
        super("AbilityInvocationFixedNotify", [
            { no: 7, name: "Unk3300_LDIAOMFIBPL", kind: "message", jsonName: "Unk3300LDIAOMFIBPL", T: () => AbilityInvokeEntry },
            { no: 3, name: "Unk3300_ONGNOHLIIBO", kind: "message", jsonName: "Unk3300ONGNOHLIIBO", T: () => AbilityInvokeEntry },
            { no: 10, name: "Unk3300_AHDFHHFHEFM", kind: "message", jsonName: "Unk3300AHDFHHFHEFM", T: () => AbilityInvokeEntry },
            { no: 1, name: "Unk3300_GAFFBFFKDIC", kind: "message", jsonName: "Unk3300GAFFBFFKDIC", T: () => AbilityInvokeEntry },
            { no: 4, name: "Unk3300_EMGKKHKLIEG", kind: "message", jsonName: "Unk3300EMGKKHKLIEG", T: () => AbilityInvokeEntry },
            { no: 9, name: "Unk3300_KFMHLLHECCJ", kind: "message", jsonName: "Unk3300KFMHLLHECCJ", T: () => AbilityInvokeEntry }
        ]);
    }
    create(value?: PartialMessage<AbilityInvocationFixedNotify>): AbilityInvocationFixedNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityInvocationFixedNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityInvocationFixedNotify): AbilityInvocationFixedNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* AbilityInvokeEntry Unk3300_LDIAOMFIBPL = 7 [json_name = "Unk3300LDIAOMFIBPL"];*/ 7:
                    message.unk3300LDIAOMFIBPL = AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300LDIAOMFIBPL);
                    break;
                case /* AbilityInvokeEntry Unk3300_ONGNOHLIIBO = 3 [json_name = "Unk3300ONGNOHLIIBO"];*/ 3:
                    message.unk3300ONGNOHLIIBO = AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300ONGNOHLIIBO);
                    break;
                case /* AbilityInvokeEntry Unk3300_AHDFHHFHEFM = 10 [json_name = "Unk3300AHDFHHFHEFM"];*/ 10:
                    message.unk3300AHDFHHFHEFM = AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300AHDFHHFHEFM);
                    break;
                case /* AbilityInvokeEntry Unk3300_GAFFBFFKDIC = 1 [json_name = "Unk3300GAFFBFFKDIC"];*/ 1:
                    message.unk3300GAFFBFFKDIC = AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300GAFFBFFKDIC);
                    break;
                case /* AbilityInvokeEntry Unk3300_EMGKKHKLIEG = 4 [json_name = "Unk3300EMGKKHKLIEG"];*/ 4:
                    message.unk3300EMGKKHKLIEG = AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300EMGKKHKLIEG);
                    break;
                case /* AbilityInvokeEntry Unk3300_KFMHLLHECCJ = 9 [json_name = "Unk3300KFMHLLHECCJ"];*/ 9:
                    message.unk3300KFMHLLHECCJ = AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300KFMHLLHECCJ);
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
    internalBinaryWrite(message: AbilityInvocationFixedNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* AbilityInvokeEntry Unk3300_LDIAOMFIBPL = 7 [json_name = "Unk3300LDIAOMFIBPL"]; */
        if (message.unk3300LDIAOMFIBPL)
            AbilityInvokeEntry.internalBinaryWrite(message.unk3300LDIAOMFIBPL, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_ONGNOHLIIBO = 3 [json_name = "Unk3300ONGNOHLIIBO"]; */
        if (message.unk3300ONGNOHLIIBO)
            AbilityInvokeEntry.internalBinaryWrite(message.unk3300ONGNOHLIIBO, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_AHDFHHFHEFM = 10 [json_name = "Unk3300AHDFHHFHEFM"]; */
        if (message.unk3300AHDFHHFHEFM)
            AbilityInvokeEntry.internalBinaryWrite(message.unk3300AHDFHHFHEFM, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_GAFFBFFKDIC = 1 [json_name = "Unk3300GAFFBFFKDIC"]; */
        if (message.unk3300GAFFBFFKDIC)
            AbilityInvokeEntry.internalBinaryWrite(message.unk3300GAFFBFFKDIC, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_EMGKKHKLIEG = 4 [json_name = "Unk3300EMGKKHKLIEG"]; */
        if (message.unk3300EMGKKHKLIEG)
            AbilityInvokeEntry.internalBinaryWrite(message.unk3300EMGKKHKLIEG, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_KFMHLLHECCJ = 9 [json_name = "Unk3300KFMHLLHECCJ"]; */
        if (message.unk3300KFMHLLHECCJ)
            AbilityInvokeEntry.internalBinaryWrite(message.unk3300KFMHLLHECCJ, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityInvocationFixedNotify
 */
export const AbilityInvocationFixedNotify = new AbilityInvocationFixedNotify$Type();
