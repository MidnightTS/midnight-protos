// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ContentAuditInfo.proto" (syntax proto3)
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
import { AuditState } from "./AuditState";
/**
 * @generated from protobuf message ContentAuditInfo
 */
export interface ContentAuditInfo {
    /**
     * @generated from protobuf field: bool is_open = 1;
     */
    isOpen: boolean;
    /**
     * @generated from protobuf field: string content = 2;
     */
    content: string;
    /**
     * @generated from protobuf field: uint32 submit_count = 3;
     */
    submitCount: number;
    /**
     * @generated from protobuf field: AuditState audit_state = 4;
     */
    auditState: AuditState;
    /**
     * @generated from protobuf field: uint32 submit_limit = 5;
     */
    submitLimit: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditInfo$Type extends MessageType<ContentAuditInfo> {
    constructor() {
        super("ContentAuditInfo", [
            { no: 1, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "submit_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "audit_state", kind: "enum", T: () => ["AuditState", AuditState, "AUDIT_STATE_"] },
            { no: 5, name: "submit_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ContentAuditInfo>): ContentAuditInfo {
        const message = { isOpen: false, content: "", submitCount: 0, auditState: 0, submitLimit: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ContentAuditInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContentAuditInfo): ContentAuditInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_open */ 1:
                    message.isOpen = reader.bool();
                    break;
                case /* string content */ 2:
                    message.content = reader.string();
                    break;
                case /* uint32 submit_count */ 3:
                    message.submitCount = reader.uint32();
                    break;
                case /* AuditState audit_state */ 4:
                    message.auditState = reader.int32();
                    break;
                case /* uint32 submit_limit */ 5:
                    message.submitLimit = reader.uint32();
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
    internalBinaryWrite(message: ContentAuditInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_open = 1; */
        if (message.isOpen !== false)
            writer.tag(1, WireType.Varint).bool(message.isOpen);
        /* string content = 2; */
        if (message.content !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.content);
        /* uint32 submit_count = 3; */
        if (message.submitCount !== 0)
            writer.tag(3, WireType.Varint).uint32(message.submitCount);
        /* AuditState audit_state = 4; */
        if (message.auditState !== 0)
            writer.tag(4, WireType.Varint).int32(message.auditState);
        /* uint32 submit_limit = 5; */
        if (message.submitLimit !== 0)
            writer.tag(5, WireType.Varint).uint32(message.submitLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ContentAuditInfo
 */
export const ContentAuditInfo = new ContentAuditInfo$Type();