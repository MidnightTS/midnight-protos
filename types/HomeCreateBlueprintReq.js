"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeCreateBlueprintReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeSceneArrangementInfo_1 = require("./HomeSceneArrangementInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeCreateBlueprintReq$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeCreateBlueprintReq", [
            { no: 4, name: "scene_arrangement_info", kind: "message", T: () => HomeSceneArrangementInfo_1.HomeSceneArrangementInfo },
            { no: 9, name: "gen_share_code_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "server_share_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "slot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { genShareCodeCount: 0, serverShareCode: "", slotId: 0 };
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
                case /* HomeSceneArrangementInfo scene_arrangement_info */ 4:
                    message.sceneArrangementInfo = HomeSceneArrangementInfo_1.HomeSceneArrangementInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneArrangementInfo);
                    break;
                case /* uint32 gen_share_code_count */ 9:
                    message.genShareCodeCount = reader.uint32();
                    break;
                case /* string server_share_code */ 5:
                    message.serverShareCode = reader.string();
                    break;
                case /* uint32 slot_id */ 15:
                    message.slotId = reader.uint32();
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
        /* HomeSceneArrangementInfo scene_arrangement_info = 4; */
        if (message.sceneArrangementInfo)
            HomeSceneArrangementInfo_1.HomeSceneArrangementInfo.internalBinaryWrite(message.sceneArrangementInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 gen_share_code_count = 9; */
        if (message.genShareCodeCount !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.genShareCodeCount);
        /* string server_share_code = 5; */
        if (message.serverShareCode !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.serverShareCode);
        /* uint32 slot_id = 15; */
        if (message.slotId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.slotId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeCreateBlueprintReq
 */
exports.HomeCreateBlueprintReq = new HomeCreateBlueprintReq$Type();
