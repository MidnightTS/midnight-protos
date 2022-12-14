// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "NicknameSignatureAuditData.proto" (syntax proto3)
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
import { ContentAuditAuxiliaryField } from "./ContentAuditAuxiliaryField";
import { ContentAuditField } from "./ContentAuditField";
/**
 * @generated from protobuf message NicknameSignatureAuditData
 */
export interface NicknameSignatureAuditData {
    /**
     * @generated from protobuf field: string aid = 1;
     */
    aid: string;
    /**
     * @generated from protobuf field: string entity_id = 2;
     */
    entityId: string;
    /**
     * @generated from protobuf field: string lang = 3;
     */
    lang: string;
    /**
     * @generated from protobuf field: string queue_key = 4;
     */
    queueKey: string;
    /**
     * @generated from protobuf field: string region = 5;
     */
    region: string;
    /**
     * @generated from protobuf field: uint32 uid = 6;
     */
    uid: number;
    /**
     * @generated from protobuf field: repeated ContentAuditField audit_field_list = 7;
     */
    auditFieldList: ContentAuditField[];
    /**
     * @generated from protobuf field: repeated ContentAuditAuxiliaryField aux_field_list = 8;
     */
    auxFieldList: ContentAuditAuxiliaryField[];
}
// @generated message type with reflection information, may provide speed optimized methods
class NicknameSignatureAuditData$Type extends MessageType<NicknameSignatureAuditData> {
    constructor() {
        super("NicknameSignatureAuditData", [
            { no: 1, name: "aid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "entity_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "lang", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "queue_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "region", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "audit_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContentAuditField },
            { no: 8, name: "aux_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContentAuditAuxiliaryField }
        ]);
    }
    create(value?: PartialMessage<NicknameSignatureAuditData>): NicknameSignatureAuditData {
        const message = { aid: "", entityId: "", lang: "", queueKey: "", region: "", uid: 0, auditFieldList: [], auxFieldList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<NicknameSignatureAuditData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NicknameSignatureAuditData): NicknameSignatureAuditData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string aid */ 1:
                    message.aid = reader.string();
                    break;
                case /* string entity_id */ 2:
                    message.entityId = reader.string();
                    break;
                case /* string lang */ 3:
                    message.lang = reader.string();
                    break;
                case /* string queue_key */ 4:
                    message.queueKey = reader.string();
                    break;
                case /* string region */ 5:
                    message.region = reader.string();
                    break;
                case /* uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* repeated ContentAuditField audit_field_list */ 7:
                    message.auditFieldList.push(ContentAuditField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ContentAuditAuxiliaryField aux_field_list */ 8:
                    message.auxFieldList.push(ContentAuditAuxiliaryField.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: NicknameSignatureAuditData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string aid = 1; */
        if (message.aid !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.aid);
        /* string entity_id = 2; */
        if (message.entityId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.entityId);
        /* string lang = 3; */
        if (message.lang !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.lang);
        /* string queue_key = 4; */
        if (message.queueKey !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.queueKey);
        /* string region = 5; */
        if (message.region !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.region);
        /* uint32 uid = 6; */
        if (message.uid !== 0)
            writer.tag(6, WireType.Varint).uint32(message.uid);
        /* repeated ContentAuditField audit_field_list = 7; */
        for (let i = 0; i < message.auditFieldList.length; i++)
            ContentAuditField.internalBinaryWrite(message.auditFieldList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated ContentAuditAuxiliaryField aux_field_list = 8; */
        for (let i = 0; i < message.auxFieldList.length; i++)
            ContentAuditAuxiliaryField.internalBinaryWrite(message.auxFieldList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message NicknameSignatureAuditData
 */
export const NicknameSignatureAuditData = new NicknameSignatureAuditData$Type();
