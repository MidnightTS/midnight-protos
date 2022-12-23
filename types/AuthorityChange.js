"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorityChange = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EntityAuthorityInfo_1 = require("./EntityAuthorityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AuthorityChange$Type extends runtime_5.MessageType {
    constructor() {
        super("AuthorityChange", [
            { no: 8, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "entity_authority_info", kind: "message", T: () => EntityAuthorityInfo_1.EntityAuthorityInfo },
            { no: 2, name: "authority_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entityId: 0, authorityPeerId: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* EntityAuthorityInfo entity_authority_info */ 1:
                    message.entityAuthorityInfo = EntityAuthorityInfo_1.EntityAuthorityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityAuthorityInfo);
                    break;
                case /* uint32 authority_peer_id */ 2:
                    message.authorityPeerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 entity_id = 8; */
        if (message.entityId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entityId);
        /* EntityAuthorityInfo entity_authority_info = 1; */
        if (message.entityAuthorityInfo)
            EntityAuthorityInfo_1.EntityAuthorityInfo.internalBinaryWrite(message.entityAuthorityInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 authority_peer_id = 2; */
        if (message.authorityPeerId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.authorityPeerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AuthorityChange
 */
exports.AuthorityChange = new AuthorityChange$Type();
