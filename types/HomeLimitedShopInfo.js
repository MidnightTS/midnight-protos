"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeLimitedShopInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeLimitedShopInfo", [
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_FKGDIDFIBAA", kind: "scalar", jsonName: "Unk3300FKGDIDFIBAA", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "djinn_rot", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "Unk3300_DLIEFPNMGFC", kind: "scalar", jsonName: "Unk3300DLIEFPNMGFC", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "djinn_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 15, name: "Unk3300_NOJPDKDPPPA", kind: "scalar", jsonName: "Unk3300NOJPDKDPPPA", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, unk3300FKGDIDFIBAA: 0, unk3300DLIEFPNMGFC: 0, unk3300NOJPDKDPPPA: 0 };
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
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 Unk3300_FKGDIDFIBAA = 8 [json_name = "Unk3300FKGDIDFIBAA"];*/ 8:
                    message.unk3300FKGDIDFIBAA = reader.uint32();
                    break;
                case /* Vector djinn_rot */ 11:
                    message.djinnRot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.djinnRot);
                    break;
                case /* uint32 Unk3300_DLIEFPNMGFC = 5 [json_name = "Unk3300DLIEFPNMGFC"];*/ 5:
                    message.unk3300DLIEFPNMGFC = reader.uint32();
                    break;
                case /* Vector djinn_pos */ 2:
                    message.djinnPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.djinnPos);
                    break;
                case /* uint32 Unk3300_NOJPDKDPPPA = 15 [json_name = "Unk3300NOJPDKDPPPA"];*/ 15:
                    message.unk3300NOJPDKDPPPA = reader.uint32();
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
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 Unk3300_FKGDIDFIBAA = 8 [json_name = "Unk3300FKGDIDFIBAA"]; */
        if (message.unk3300FKGDIDFIBAA !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300FKGDIDFIBAA);
        /* Vector djinn_rot = 11; */
        if (message.djinnRot)
            Vector_1.Vector.internalBinaryWrite(message.djinnRot, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_DLIEFPNMGFC = 5 [json_name = "Unk3300DLIEFPNMGFC"]; */
        if (message.unk3300DLIEFPNMGFC !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300DLIEFPNMGFC);
        /* Vector djinn_pos = 2; */
        if (message.djinnPos)
            Vector_1.Vector.internalBinaryWrite(message.djinnPos, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_NOJPDKDPPPA = 15 [json_name = "Unk3300NOJPDKDPPPA"]; */
        if (message.unk3300NOJPDKDPPPA !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300NOJPDKDPPPA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeLimitedShopInfo
 */
exports.HomeLimitedShopInfo = new HomeLimitedShopInfo$Type();
