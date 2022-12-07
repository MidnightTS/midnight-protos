"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartArenaChallengeLevelReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class StartArenaChallengeLevelReq$Type extends runtime_5.MessageType {
    constructor() {
        super("StartArenaChallengeLevelReq", [
            { no: 13, name: "Unk3300_FDFNFLAKONG", kind: "scalar", jsonName: "Unk3300FDFNFLAKONG", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_DBHAGHMMLAI", kind: "scalar", jsonName: "Unk3300DBHAGHMMLAI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300FDFNFLAKONG: 0, gadgetEntityId: 0, unk3300DBHAGHMMLAI: 0 };
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
                case /* uint32 Unk3300_FDFNFLAKONG = 13 [json_name = "Unk3300FDFNFLAKONG"];*/ 13:
                    message.unk3300FDFNFLAKONG = reader.uint32();
                    break;
                case /* uint32 gadget_entity_id */ 3:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 Unk3300_DBHAGHMMLAI = 12 [json_name = "Unk3300DBHAGHMMLAI"];*/ 12:
                    message.unk3300DBHAGHMMLAI = reader.uint32();
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
        /* uint32 Unk3300_FDFNFLAKONG = 13 [json_name = "Unk3300FDFNFLAKONG"]; */
        if (message.unk3300FDFNFLAKONG !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300FDFNFLAKONG);
        /* uint32 gadget_entity_id = 3; */
        if (message.gadgetEntityId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 Unk3300_DBHAGHMMLAI = 12 [json_name = "Unk3300DBHAGHMMLAI"]; */
        if (message.unk3300DBHAGHMMLAI !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300DBHAGHMMLAI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StartArenaChallengeLevelReq
 */
exports.StartArenaChallengeLevelReq = new StartArenaChallengeLevelReq$Type();
